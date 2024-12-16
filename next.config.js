/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.tina.io', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'natecard.dev',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
  reactStrictMode: true,
}

module.exports = nextConfig
