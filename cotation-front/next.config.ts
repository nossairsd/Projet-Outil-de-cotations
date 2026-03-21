import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images:{
    domains:['example.com','localhost'],
  },
  output: 'standalone',
   experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  reactCompiler: true,
};

export default nextConfig;