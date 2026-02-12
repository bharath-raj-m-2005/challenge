import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable React StrictMode for static exports
  reactStrictMode: false,
  
  // Image optimization for static export
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  
  // Static export configuration
  output: 'export',
  
  // Required for Netlify
  trailingSlash: true,
  
  // Base path if deploying to a subdirectory
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

// Create a simple image loader if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('./image-loader.js')) {
  fs.writeFileSync(
    './image-loader.js',
    'module.exports = (src) => src;'
  );
}

export default nextConfig;
