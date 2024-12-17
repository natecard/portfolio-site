import type { Config } from 'prettier';

const config: Config = {
	trailingComma: 'all',
	printWidth: 100,
	useTabs: true,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	quoteProps: 'as-needed',
	bracketSpacing: true,
	arrowParens: 'always',
	endOfLine: 'lf',
	plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
