// const path = require('path');
module.exports = {
	// webpack: (config) => {
	// 	config.resolve.modules.push(path.resolve('./src'));
	// 	return config;
	// },
	async rewrites() {
		return [
			{
				source: '/admin',
				destination: '/admin/index.html',
			},
		];
	},
	images: {
		domains: ['assets.tina.io'],
	},
	reactStrictMode: true,
	// basePath: '/'
	// typescript: {
	// !! WARN !!
	// Dangerously allow production builds to successfully complete even if
	// your project has type errors.
	// !! WARN !!
	// ignoreBuildErrors: true,
	// },
};
