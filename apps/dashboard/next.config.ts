import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@beamer/db", "@beamer/ui"],
};

export default nextConfig;
