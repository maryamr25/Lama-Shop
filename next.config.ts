import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
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


export default nextConfig;
