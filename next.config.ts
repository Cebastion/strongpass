import type { NextConfig } from "next";
import createMDX from '@next/mdx'



const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 768, 1024, 1180, 1280, 1300, 1536]
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)