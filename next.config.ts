import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable React StrictMode for static exports
  reactStrictMode: false,
  
  // Image optimization for static export
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  
  // Static export configuration
  output: 'export',
  
  // Required for Netlify
  trailingSlash: true,
  
  // Base path if deploying to a subdirectory
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

export default nextConfig;
