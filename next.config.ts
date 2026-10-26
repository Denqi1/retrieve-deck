import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: process.env.VERCEL ? undefined : 'standalone',
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
