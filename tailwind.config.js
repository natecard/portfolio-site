// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				font: '#f5f5f5',
				primary: '#b37c40',
				secondary: '#bdbbbe',
				background: '#1d161f',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: false,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'dark',
	},
};
