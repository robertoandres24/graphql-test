module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['prettier', 'eslint:recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
  },

  rules: {
    // indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'prettier/prettier': 'error',
  },
}
