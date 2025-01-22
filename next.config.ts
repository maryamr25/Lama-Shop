import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      }
    ]
  },


};
  // next.config.js
  module.exports = {
    eslint: {
      // Disable specific rules
      ignoreDuringBuilds: true, // This will ignore ESLint errors during production builds
      // You can add other configurations if needed
    },
  }

export default nextConfig;
