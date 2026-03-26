import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions:['js','ts','tsx','jsx','md','mdx'],
  /* config options here */
  images:{
    remotePatterns:[
    {
      hostname:"images.unsplash.com"
    }
    ]
  }
};

const withMdx= createMDX({  extension: /\.(md|mdx)$/,
})
export default withMdx(nextConfig);
