// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  {
    ignores: [
      "jest.config.js",
      "dist",
      "types",
      "docs",
      "node_modules",
      "localtest",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        project: "tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "warn",
      "no-else-return": ["error", { allowElseIf: false }],
      "consistent-return": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            accessors: "explicit",
            constructors: "no-public",
            methods: "explicit",
            properties: "explicit",
            parameterProperties: "explicit",
          },
        },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-exports": "error",
    },
  },
);
