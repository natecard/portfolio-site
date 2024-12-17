/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "natecard.dev", "github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "natecard.dev",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
};
export default nextConfig;
