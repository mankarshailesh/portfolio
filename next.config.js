/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  trailingSlash: true,
  distDir: "dist",
};

module.exports = nextConfig;
