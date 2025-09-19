import { NextResponse } from "next/server";
import type { JWSTransactionDecodedPayload } from "@apple/app-store-server-library";

import { createAppStoreToken } from "@/lib/appstore/createAppStoreToken";

export const runtime = "nodejs";

const routeTag = "[iap.validate.sand]";
function logInfo(message: string, meta?: Record<string, unknown>) {
  // eslint-disable-next-line no-console
  console.log(routeTag, message, meta ?? {});
}
function logError(message: string, meta?: Record<string, unknown>) {
  // eslint-disable-next-line no-console
  console.error(routeTag, message, meta ?? {});
}

type ValidateBody = {
  transactionId: string;
  productId: string;
  appAccountToken?: string;
};

async function fetchTransactionFromAppleSandbox(transactionId: string, bearer: string) {
  const san = `https://api.storekit-sandbox.itunes.apple.com/inApps/v1/transactions/${transactionId}`;

  const headers = { Authorization: `Bearer ${bearer}` } as const;
  const res = await fetch(san, { headers });

  if (!res.ok) {
    const text = await res.text();
    logError("apple sandbox api responded non-ok", {
      transactionId,
      status: res.status,
      body: text,
      url: res.url,
    });
    throw new Error(`Apple Sandbox API ${res.status}: ${text}`);
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
    const { transactionId, productId }: ValidateBody = await req.json();

    if (!transactionId || !productId) {
      logError("missing required fields", { transactionId, productId });
      return NextResponse.json(
        { error: "transactionId and productId required" },
        { status: 400 }
      );
    }

    const token = await createAppStoreToken();
    logInfo("fetching transaction from apple sandbox", { transactionId, productId });
    const tx = await fetchTransactionFromAppleSandbox(transactionId, token);

    const payload = decodeJWSPayload<JWSTransactionDecodedPayload>(
      tx.signedTransactionInfo
    );

    const matchesProduct = payload.productId === productId;
    const revoked = !!payload.revocationDate;

    const isUnlocked = matchesProduct && !revoked;

    logInfo("validation result", {
      transactionId: payload.transactionId,
      originalTransactionId: payload.originalTransactionId,
      productId: payload.productId,
      env: tx.environment,
      matchesProduct,
      revoked,
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
    logError("unhandled error in validate sandbox handler", { message, stack });
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


