module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:chai-friendly/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
