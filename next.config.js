const path = require('path');
module.exports = {
	webpack: (config) => {
		config.resolve.modules.push(path.resolve('./src'));
		return config;
	},
	reactStrictMode: true,
	experimental: {
		appDir: path.join(__dirname, 'src/app'), // Specify the path to your 'app' directory
	},
	// typescript: {
	// !! WARN !!
	// Dangerously allow production builds to successfully complete even if
	// your project has type errors.
	// !! WARN !!
	// ignoreBuildErrors: true,
	// },
};
