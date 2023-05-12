/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // swcMinify: true,
  generateBuildId: () => "market",
};

module.exports = nextConfig;
