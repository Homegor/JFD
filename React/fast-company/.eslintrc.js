module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: [0, 2],
    semi: [2, 'never'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' }
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'multiline-ternary': ['error', 'always-multiline']
  }
}
