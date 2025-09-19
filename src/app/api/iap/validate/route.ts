import { NextResponse } from "next/server";
import { createAppStoreToken } from "@/lib/appstore/createAppStoreToken";

export const runtime = "nodejs";

type ValidateBody = {
  transactionId: string;
  productId: string;
  appAccountToken?: string;
};

async function fetchTransactionFromApple(transactionId: string, bearer: string) {
  const prod = `https://api.storekit.itunes.apple.com/inApps/v1/transactions/${transactionId}`;
  const san = `https://api.storekit-sandbox.itunes.apple.com/inApps/v1/transactions/${transactionId}`;

  const headers = { Authorization: `Bearer ${bearer}` } as const;
  let res = await fetch(prod, { headers });
  if (res.status === 404) res = await fetch(san, { headers });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Apple API ${res.status}: ${text}`);
  }
  return res.json() as Promise<{ signedTransactionInfo: string; environment: string }>;
}

function decodeJWSPayload<T = any>(jws: string): T {
  const [, payload] = jws.split(".");
  const json = Buffer.from(payload, "base64url").toString("utf8");
  return JSON.parse(json);
}

export async function POST(req: Request) {
  try {
    const { transactionId, productId }: ValidateBody = await req.json();

    if (!transactionId || !productId) {
      return NextResponse.json(
        { error: "transactionId and productId required" },
        { status: 400 }
      );
    }

    const token = await createAppStoreToken();
    const tx = await fetchTransactionFromApple(transactionId, token);

    // NOTE: For production, verify the JWS signature (use app-store-server-library).
    const payload = decodeJWSPayload<any>(tx.signedTransactionInfo);

    const matchesProduct = payload.productId === productId;
    const revoked = !!payload.revocationDate;

    const isUnlocked = matchesProduct && !revoked;

    return NextResponse.json({
      isUnlocked,
      productId: payload.productId,
      transactionId: payload.transactionId,
      originalTransactionId: payload.originalTransactionId,
      environment: tx.environment,
      revoked,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? "unknown" }, { status: 500 });
  }
}


