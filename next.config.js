/** @type {import('next').NextConfig} */
const imageDomain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN || 'doublecheck.com.co';

const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: [imageDomain],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
};

module.exports = nextConfig;
