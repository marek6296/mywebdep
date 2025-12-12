import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [],
  },
  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  // Reduce bundle size
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap", "lucide-react"],
  },
};

export default nextConfig;
