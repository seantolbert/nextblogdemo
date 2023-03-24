/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.imgur.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
