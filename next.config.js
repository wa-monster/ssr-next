/** @type {import('next').NextConfig} */
const path = require("path");
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
}

module.exports = nextConfig
