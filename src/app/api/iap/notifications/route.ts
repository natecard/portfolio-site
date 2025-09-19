import { NextResponse } from "next/server";
import { SignedDataVerifier, Environment } from "@apple/app-store-server-library";
import type { ResponseBodyV2DecodedPayload } from "@apple/app-store-server-library";
import type { JWSTransactionDecodedPayload } from "@apple/app-store-server-library";

export const runtime = "nodejs";

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

    // Supply Apple root CAs via env as base64 DER, comma-separated (recommended)
    const appleRoots = base64DerListFromEnv(process.env.APPLE_ROOT_CAS_DER_BASE64);
    const bundleId = process.env.APP_BUNDLE_ID ?? "";
    const envString = process.env.APPSTORE_ENV ?? "Sandbox"; // "Production" or "Sandbox"
    const environment = (envString === "Production" || envString === "production" || envString === "PRODUCTION" ? Environment.PRODUCTION : Environment.SANDBOX) as Environment;

    let payload: ResponseBodyV2DecodedPayload | null = null;
    if (appleRoots.length && bundleId) {
      try {
        const verifier = new SignedDataVerifier(appleRoots, false, environment, bundleId);
        payload = await verifier.verifyAndDecodeNotification(signedPayload);
      } catch (error: unknown) {
        // Fall back to non-verified decode to avoid dropping notifications in dev
        payload = null;
        if (process.env.NODE_ENV !== "production") {
          console.error(error);
        }
      }
    }

    if (!payload) {
      // Non-verified decode (dev fallback)
      const [, body] = signedPayload.split(".");
      const json = Buffer.from(body, "base64url").toString("utf8");
      payload = JSON.parse(json) as ResponseBodyV2DecodedPayload;
    }

    const { data } = payload;

    if (data?.signedTransactionInfo) {
        // If roots supplied, verify transaction JWS as well
        if (appleRoots.length && bundleId) {
          try {
          const verifier = new SignedDataVerifier(appleRoots, false, environment, bundleId);
            const txDecoded: JWSTransactionDecodedPayload = await verifier.verifyAndDecodeTransaction(
              data.signedTransactionInfo
            );
            if (process.env.NODE_ENV !== "production") {
              // placeholder hook for persistence; avoid unused var
              void txDecoded.revocationDate;
            }
          } catch (error: unknown) {
            if (process.env.NODE_ENV !== "production") {
              console.error(error);
            }
            // ignore in fallback mode
          }
        }
        // else: could decode without verification similarly to validate route
      }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "unknown";
    return NextResponse.json({ error: message }, { status: 200 });
  }
}


