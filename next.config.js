/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },

  images: {
     domains: ['content.kalabars.com'],
     remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.kalabars.com',
        pathname: '/static/media/**',
      },
    ],
  },

  assetPrefix: '',
}

module.exports = nextConfig