module.exports = {
	trailingComma: 'all',
	tabWidth: 2,
	printWidth: 100,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	bracketSpacing: true,
	arrowParens: 'always',
	jsxBracketSameLine: false,
	endOfLine: 'lf',
	tailwindConfig: './tailwind.config.js',
	overrides: [
		{
			files: '.prettierrc',
			options: {
				parser: 'json',
			},
		},
	],
	plugins: [require('prettier-plugin-tailwindcss')],
};
