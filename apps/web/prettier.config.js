import prettierConfig from "@beamer/prettier-config";

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig } */
export default {
  ...prettierConfig,
  tailwindStylesheet: "./src/app/globals.css",
};
