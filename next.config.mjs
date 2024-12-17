/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      nextScriptWorkers: true,
      transpilePackages: ["@mlc-ai/web-llm"],
      trustedPaths: ["/Qwen2.5-0.5B-Instruct-q4f16_1-MLC"],
      webpack: (config) => {
        config.output.webassemblyModuleFilename =
          "static/wasm/[modulehash].wasm";
        config.experiments = { ...config.experiments, asyncWebAssembly: true };
        config.output.globalObject = "self";
        return config;
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
      reactStrictMode: true,
    },
  },
};
export default nextConfig;
