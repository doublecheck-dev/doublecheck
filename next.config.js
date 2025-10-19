/** @type {import('next').NextConfig} */
const imageDomain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN || 'doublecheck.com.co';

const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: [imageDomain]
  }
};

module.exports = nextConfig;
