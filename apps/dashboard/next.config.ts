import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@beamer/db", "@beamer/ui"],
  webpack: (config) => {
    config.resolve.alias["lucide-react"] = path.resolve(
      __dirname,
      "node_modules/lucide-react",
    );
    return config;
  },
};

export default nextConfig;
