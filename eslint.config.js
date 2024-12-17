import js from '@eslint/js';
import globals from 'globals';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import nextPlugin from '@next/eslint-plugin-next';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules/**', '.next/**', 'dist/**'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: true
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      '@next/next': nextPlugin,
      import: importPlugin
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import/order': ['error', {
        'groups': [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'pathGroups': [
          { pattern: 'react', group: 'builtin', position: 'before' },
          { pattern: 'next/**', group: 'builtin', position: 'before' },
          { pattern: '@/**', group: 'internal' }
        ],
        'pathGroupsExcludedImportTypes': ['react', 'next'],
        'newlines-between': 'always',
        'alphabetize': { order: 'asc', caseInsensitive: true }
      }],
      'sort-imports': ['error', {
        ignoreDeclarationSort: true
      }]
    }
  }
];
