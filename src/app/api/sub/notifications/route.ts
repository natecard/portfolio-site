import { NextResponse } from "next/server";
import { SignedDataVerifier, Environment } from "@apple/app-store-server-library";
import type { ResponseBodyV2DecodedPayload } from "@apple/app-store-server-library";
import type { JWSTransactionDecodedPayload } from "@apple/app-store-server-library";

export const runtime = "nodejs";

const routeTag = "[sub.notifications.prod]";
function logInfo(message: string, meta?: Record<string, unknown>) {
  console.log(routeTag, message, meta ?? {});
}
function logError(message: string, meta?: Record<string, unknown>) {
  console.error(routeTag, message, meta ?? {});
}

// Subscription tier detection from product ID
function tierFromProductId(productId: string): "free" | "pro" | "max" {
  const lowercased = productId.toLowerCase();
  if (lowercased.includes("max_level")) return "max";
  if (lowercased.includes("pro_level")) return "pro";
  return "free";
}

function base64DerListFromEnv(envVar: string | undefined): Buffer[] {
  if (!envVar) return [];
  try {
    const parts = envVar.split(",").map((p) => p.trim()).filter(Boolean);
    return parts.map((b64) => Buffer.from(b64, "base64"));
  } catch {
    return [];
  }
}

export async function POST(req: Request) {
  try {
    const { signedPayload } = await req.json();
    if (!signedPayload)
      return NextResponse.json({ error: "signedPayload required" }, { status: 400 });

    // Supply Apple root CAs via env as base64 DER, comma-separated
    const appleRoots = base64DerListFromEnv(process.env.APPLE_ROOT_CAS_DER_BASE64);
    const bundleId = process.env.APP_BUNDLE_ID ?? "com.natecard.auditoury";
    const environment = Environment.PRODUCTION as Environment;

    logInfo("received subscription notification", { hasRoots: !!appleRoots.length, bundleId });

    let payload: ResponseBodyV2DecodedPayload | null = null;
    if (appleRoots.length && bundleId) {
      try {
        const verifier = new SignedDataVerifier(appleRoots, false, environment, bundleId);
        payload = await verifier.verifyAndDecodeNotification(signedPayload);
        logInfo("verified notification payload", { 
          notificationType: payload.notificationType, 
          subtype: payload.subtype 
        });
      } catch (error: unknown) {
        payload = null;
        if (process.env.NODE_ENV !== "production") {
          logError("failed to verify notification payload", { 
            error: error instanceof Error ? error.message : String(error) 
          });
        }
      }
    }

    if (!payload) {
      // Non-verified decode (dev fallback)
      const [, body] = signedPayload.split(".");
      const json = Buffer.from(body, "base64url").toString("utf8");
      payload = JSON.parse(json) as ResponseBodyV2DecodedPayload;
      logInfo("decoded notification without verification (fallback)", { 
        notificationType: payload.notificationType, 
        subtype: payload.subtype 
      });
    }

    const { data } = payload;

    // Process subscription-specific notifications
    if (data?.signedTransactionInfo) {
      if (appleRoots.length && bundleId) {
        try {
          const verifier = new SignedDataVerifier(appleRoots, false, environment, bundleId);
          const txDecoded: JWSTransactionDecodedPayload = await verifier.verifyAndDecodeTransaction(
            data.signedTransactionInfo
          );
          
          const tier = tierFromProductId(txDecoded.productId ?? "");
          const expiresDate = txDecoded.expiresDate ? new Date(txDecoded.expiresDate) : null;
          
          logInfo("verified subscription transaction", {
            productId: txDecoded.productId,
            tier,
            transactionId: txDecoded.transactionId,
            originalTransactionId: txDecoded.originalTransactionId,
            expiresDate: expiresDate?.toISOString(),
            revoked: !!txDecoded.revocationDate,
            notificationType: payload.notificationType,
            subtype: payload.subtype,
          });

          // TODO: Persist subscription state to database here
          // e.g., update subscription status on DID_RENEW, DID_CHANGE_RENEWAL_STATUS, etc.
          
        } catch (error: unknown) {
          if (process.env.NODE_ENV !== "production") {
            logError("failed to verify transaction payload", { 
              error: error instanceof Error ? error.message : String(error) 
            });
          }
        }
      }
    }

    logInfo("subscription notification processed ok", { 
      notificationType: payload.notificationType 
    });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "unknown";
    const stack = err instanceof Error ? err.stack : undefined;
    logError("unhandled error in subscription notifications handler", { message, stack });
    // Return 200 to prevent Apple from retrying (they retry on non-2xx)
    return NextResponse.json({ error: message }, { status: 200 });
  }
}
