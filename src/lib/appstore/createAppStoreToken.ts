import { SignJWT, importPKCS8 } from "jose";

const ALG = "ES256";

export async function createAppStoreToken(): Promise<string> {
  const issuerId = process.env.APPSTORE_ISSUER_ID!;
  const keyId = process.env.APPSTORE_KEY_ID!;
  const privateKey = process.env.APPSTORE_PRIVATE_KEY!;
  const bundleId = process.env.APP_BUNDLE_ID!;

  const pk = await importPKCS8(privateKey, ALG);
  const now = Math.floor(Date.now() / 1000);

  const jwt = await new SignJWT({ bid: bundleId })
    .setProtectedHeader({ alg: ALG, kid: keyId, typ: "JWT" })
    .setIssuedAt(now)
    .setExpirationTime(now + 60)
    .setIssuer(issuerId)
    .setAudience("appstoreconnect-v1")
    .sign(pk);

  return jwt;
}


