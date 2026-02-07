import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // For GitHub Pages project sites the site will be served under
  // https://<user>.github.io/<repo>. We use NEXT_PUBLIC_BASE_PATH
  // during the GitHub Actions build to set the correct base path.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
