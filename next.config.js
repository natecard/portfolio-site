/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.tina.io', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.tina.io',
      },
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
