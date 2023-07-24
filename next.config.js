/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ["avatars.githubusercontent.com", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
