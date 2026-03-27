import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions:['js','ts','tsx','jsx','md','mdx'],
  transpilePackages:['next-mdx-remote'],
  
  /* config options here */
  images:{
    remotePatterns:[
    {
      hostname:"images.unsplash.com"
    }
    ]
  }
};
export default nextConfig;
