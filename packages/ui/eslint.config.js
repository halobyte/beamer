import baseConfig from "@beamer/eslint-config/base";
import reactConfig from "@beamer/eslint-config/react";

/** @type {import("typescript-eslint").Config} */
export default [{ ignores: [] }, ...baseConfig, ...reactConfig];
