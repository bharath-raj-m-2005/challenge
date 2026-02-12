import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Required for static exports
  },
  output: 'export',
  // Optional: Add basePath if deploying to GitHub Pages
  // basePath: '/your-repo-name',
  // Optional: Configure asset prefix for CDN
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://your-cdn-url.com' : '',
};

export default nextConfig;
