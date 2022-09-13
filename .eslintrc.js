module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-props-no-spreading": [0, {}],
    "import/extensions": [0, {}],
    // note you must disable the base rule as it can report incorrect errors, https://stackoverflow.com/a/64024916
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "jsx-a11y/label-has-associated-control": [0, {}],
    "react/prop-types": 0,
    "max-len": [0, {}],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.ts",
          "**/*.test.tsx",
          "**/*.test.js",
          "**/*.test.jsx",
        ],
      },
    ],
    "linebreak-style": 0,
    quotes: [2, "double"],
    "object-curly-newline": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
