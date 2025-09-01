module.exports = {
  env: { es2021: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-native"],
  settings: { react: { version: "detect" } },
  ignorePatterns: ["node_modules/", "dist/", "build/", ".expo/"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off"
  },
};
