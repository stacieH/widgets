import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // React (ESLint 9/10 native plugin)
  {
    ...eslintReact.configs.recommended,
    settings: {
      react: { version: "detect" },
    },
  },

  // React Hooks
  {
    plugins: { "react-hooks": reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },

  // Project-specific overrides
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Disable ESLint rules that conflict with Prettier (must be last)
  prettierConfig,

  // Ignore patterns
  {
    ignores: ["dist/**", "node_modules/**", "*.config.js"],
  }
);
