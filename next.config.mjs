import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    allowedDevOrigins: ["localhost"],
  },
  turbopack: {
    resolveExtensions: [".ts", ".tsx", ".js", ".jsx", ".md", ".mdx", ".css"],
  },
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
  async headers() {
    return [
      {
        source: "/:path*.ts",
        headers: [
          {
            key: "Content-Type",
            value: "text/javascript",
          },
        ],
      },
    ];
  },
  reactStrictMode: false,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
