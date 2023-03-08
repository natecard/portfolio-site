import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default defineConfig({
	base: '/',
	indexHTML: './index.html',
	jsx: 'react',
	plugins: [react(), eslintPlugin()],
	rollupInputOptions: {
		input: './src/main.tsx',
	},
});
