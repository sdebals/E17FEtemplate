const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:storybook/recommended'
  ],
  globals: {
    React: true,
    JSX: true
  },
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true
  },
  plugins: ['only-warn'],
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/'
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }]
};
