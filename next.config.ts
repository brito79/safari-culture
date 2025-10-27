
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'namibiawilderness-image-store.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: '*.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https', 
        hostname: '*.s3.*.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Disable image optimization to prevent S3 timeout issues
    // This is a common solution for external image sources
    unoptimized: true,
  },
  
  async redirects() {
    return [
      {
        source: '/camps/hoanib-skeleton',
        destination: '/camps/hoanib-skeleton-coast',
        permanent: true,
      },
      {
        source: '/camps/hoanib-skeleton/:path*',
        destination: '/camps/hoanib-skeleton-coast/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
