module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
