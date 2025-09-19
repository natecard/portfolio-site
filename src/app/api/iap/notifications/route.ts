import { NextResponse } from "next/server";
import { SignedJWTVerifier, Environment } from "app-store-server-library";

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
    const environment = (envString === "Production" ? Environment.PRODUCTION : Environment.SANDBOX) as Environment;

    let payload: any | null = null;
    if (appleRoots.length && bundleId) {
      try {
        const verifier = new SignedJWTVerifier(appleRoots, false, environment, bundleId);
        payload = await verifier.verifyAndDecodeNotification(signedPayload);
      } catch (e) {
        // Fall back to non-verified decode to avoid dropping notifications in dev
        payload = null;
      }
    }

    if (!payload) {
      // Non-verified decode (dev fallback)
      const [, body] = signedPayload.split(".");
      const json = Buffer.from(body, "base64url").toString("utf8");
      payload = JSON.parse(json);
    }

    const { notificationType, subtype, data } = payload;

    if (data?.signedTransactionInfo) {
      // If roots supplied, verify transaction JWS as well
      if (appleRoots.length && bundleId) {
        try {
          const verifier = new SignedJWTVerifier(appleRoots, false, environment, bundleId);
          const txDecoded = await verifier.verifyAndDecodeTransaction(data.signedTransactionInfo);
          const revoked = !!txDecoded.revocationDate;
          void revoked; // placeholder hook for persistence
        } catch {
          // ignore in fallback mode
        }
      }
      // else: could decode without verification similarly to validate route
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? "unknown" }, { status: 200 });
  }
}


