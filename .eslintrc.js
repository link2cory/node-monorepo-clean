module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["import", "@typescript-eslint", "prettier", "jest"],
  extends: [
    "eslint:recommended",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {},
  root: true,
};
