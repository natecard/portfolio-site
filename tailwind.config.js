// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'index.html',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
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
			backgroundImage: {
				'gradient-conic': 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
			},
			keyframes: {
				typing: {
					'0%': {
						width: '0%',
						visibility: 'hidden',
					},
					'70%': {
						width: '100%',
					},
					'100%': {
						width: '100%',
					},
				},
				blink: {
					'50%': {
						borderColor: 'transparent',
					},
					'100%': {
						borderColor: 'white',
					},
				},
			},
			animation: {
				typing: 'typing 7s steps(70) infinite alternate, blink .7s infinite',
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
