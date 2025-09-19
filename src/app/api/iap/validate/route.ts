import { NextResponse } from "next/server";
import type { JWSTransactionDecodedPayload } from "@apple/app-store-server-library";

import { createAppStoreToken } from "@/lib/appstore/createAppStoreToken";

export const runtime = "nodejs";

const routeTag = "[iap.validate.prod]";
function logInfo(message: string, meta?: Record<string, unknown>) {
   
  console.log(routeTag, message, meta ?? {});
}
function logError(message: string, meta?: Record<string, unknown>) {
   
  console.error(routeTag, message, meta ?? {});
}

type ValidateBody = {
  transactionId: string;
  productId?: string;
  revoked?: boolean;
  appAccountToken?: string;
};

async function fetchTransactionFromApple(transactionId: string, bearer: string) {
  const prod = `https://api.storekit.itunes.apple.com/inApps/v1/transactions/${transactionId}`;
  const san = `https://api.storekit-sandbox.itunes.apple.com/inApps/v1/transactions/${transactionId}`;

  const headers = { Authorization: `Bearer ${bearer}` } as const;
  let res = await fetch(prod, { headers });
  if (res.status === 404) {
    logInfo("prod returned 404, falling back to sandbox", { transactionId });
    res = await fetch(san, { headers });
  }

  if (!res.ok) {
    const text = await res.text();
    logError("apple api responded non-ok", {
      transactionId,
      status: res.status,
      body: text,
      url: res.url,
    });
    throw new Error(`Apple API ${res.status}: ${text}`);
  }
  return res.json() as Promise<{ signedTransactionInfo: string; environment: string }>;
}

function decodeJWSPayload<T>(jws: string): T {
  const [, payload] = jws.split(".");
  const json = Buffer.from(payload, "base64url").toString("utf8");
  return JSON.parse(json);
}

export async function POST(req: Request) {
  try {
    const { transactionId, productId, revoked: clientRevoked }: ValidateBody = await req.json();

    if (!transactionId) {
      logError("missing required fields", { transactionId, productId });
      return NextResponse.json(
        { error: "transactionId required" },
        { status: 400 }
      );
    }

    const token = await createAppStoreToken();
    logInfo("fetching transaction from apple", { transactionId, productId, clientRevoked });
    const tx = await fetchTransactionFromApple(transactionId, token);

    // NOTE: For production, verify the JWS signature (use app-store-server-library).
    const payload = decodeJWSPayload<JWSTransactionDecodedPayload>(
      tx.signedTransactionInfo
    );

    const matchesProduct = typeof productId === "string" ? payload.productId === productId : true;
    const revoked = !!payload.revocationDate;

    const isUnlocked = matchesProduct && !revoked;

    logInfo("validation result", {
      transactionId: payload.transactionId,
      originalTransactionId: payload.originalTransactionId,
      productId: payload.productId,
      env: tx.environment,
      matchesProduct,
      revoked,
      clientRevoked,
      isUnlocked,
    });

    return NextResponse.json({
      isUnlocked,
      productId: payload.productId,
      transactionId: payload.transactionId,
      originalTransactionId: payload.originalTransactionId,
      environment: tx.environment,
      revoked,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "unknown";
    const stack = err instanceof Error ? err.stack : undefined;
    logError("unhandled error in validate handler", { message, stack });
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


