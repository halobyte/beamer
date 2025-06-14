import baseConfig, { restrictEnvAccess } from "@beamer/eslint-config/base";
import nextConfig from "@beamer/eslint-config/next";
import reactConfig from "@beamer/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextConfig,
  ...restrictEnvAccess,
];
