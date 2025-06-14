import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@beamer/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
