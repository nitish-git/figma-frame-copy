import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    FIGMA_ACCESS_TOKEN: process.env.FIGMA_ACCESS_TOKEN,
  },
};

export default nextConfig;
