import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		mdxRs: true,
	},
	turbopack: {
		resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx', '.css'],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'natecard.dev',
			},
			{
				protocol: 'https',
				hostname: 'github.com',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
			},
		],
		unoptimized: process.env.NODE_ENV === 'development',
	},
	async headers() {
		return [
			{
				source: '/:path*.ts',
				headers: [
					{
						key: 'Content-Type',
						value: 'text/javascript',
					},
				],
			},
		];
	},
	reactStrictMode: false,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
