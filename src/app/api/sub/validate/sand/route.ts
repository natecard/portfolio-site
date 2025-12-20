import { NextResponse } from "next/server";
import type { JWSTransactionDecodedPayload } from "@apple/app-store-server-library";

import { createAppStoreToken } from "@/lib/appstore/createAppStoreToken";

export const runtime = "nodejs";

const routeTag = "[sub.validate.sand]";
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

// Subscription tier detection from product ID
// Format: auditoury_subscription_{period}_{tier}_level
function tierFromProductId(productId: string): "free" | "pro" | "max" {
  const lowercased = productId.toLowerCase();
  if (lowercased.includes("max_level")) return "max";
  if (lowercased.includes("pro_level")) return "pro";
  return "free";
}

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
    const { transactionId, productId, revoked: clientRevoked }: ValidateBody = await req.json();

    if (!transactionId) {
      logError("missing required fields", { transactionId, productId });
      return NextResponse.json(
        { error: "transactionId required" },
        { status: 400 }
      );
    }

    const token = await createAppStoreToken();
    logInfo("fetching subscription transaction from apple sandbox", { transactionId, productId, clientRevoked });
    const tx = await fetchTransactionFromAppleSandbox(transactionId, token);

    const payload = decodeJWSPayload<JWSTransactionDecodedPayload>(
      tx.signedTransactionInfo
    );

    const matchesProduct = typeof productId === "string" ? payload.productId === productId : true;
    const revoked = !!payload.revocationDate;
    const tier = tierFromProductId(payload.productId ?? "");
    
    // Check if subscription is still valid (not expired and not revoked)
    const expiresDate = payload.expiresDate ? new Date(payload.expiresDate) : null;
    const isExpired = expiresDate ? expiresDate < new Date() : false;
    const isSubscribed = matchesProduct && !revoked && !isExpired && tier !== "free";

    logInfo("subscription validation result", {
      transactionId: payload.transactionId,
      originalTransactionId: payload.originalTransactionId,
      productId: payload.productId,
      tier,
      env: tx.environment,
      matchesProduct,
      revoked,
      isExpired,
      expiresDate: expiresDate?.toISOString(),
      clientRevoked,
      isSubscribed,
    });

    return NextResponse.json({
      isSubscribed,
      tier,
      productId: payload.productId,
      transactionId: payload.transactionId,
      originalTransactionId: payload.originalTransactionId,
      expiryDate: expiresDate?.toISOString() ?? null,
      environment: tx.environment,
      revoked,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "unknown";
    const stack = err instanceof Error ? err.stack : undefined;
    logError("unhandled error in subscription validate sandbox handler", { message, stack });
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
