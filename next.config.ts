import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  // For Netlify
  trailingSlash: true,
  // If you're deploying to a subpath, uncomment and set your base path
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  // Enable client-side routing for Netlify
  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/download': { page: '/download' },
      // Add other routes here if needed
    };
  },
};

export default nextConfig;
