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
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  reactStrictMode: true,
};
export default nextConfig;
