/** @type {import('next').NextConfig} */
const { config } = require('process');
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    );
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

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