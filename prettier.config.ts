import type { Config } from "prettier";

const config: Config = {
  trailingComma: "all",
  printWidth: 100,
  useTabs: true,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  quoteProps: "as-needed",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  ignore: [
    ".next/",
    "build/",
    "dist/",
    "coverage/",
    "node_modules/",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
    "*.config.js",
    "*.config.ts",
    "**/*.md",
    "**/*.svg",
    "**/*.ejs",
    "**/*.html",
    ".vscode/",
    ".vercel/",
    ".DS_Store",
  ],
};

export default config;
