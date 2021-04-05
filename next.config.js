/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

require('dotenv').config();

const srcPath = path.resolve(__dirname, 'src');
module.exports = withPlugins([
  [images, {
    exclude: /\.svg$/,
  }],
  bundleAnalyzer,
], {

  // Main Redirect
  source: '',
  destination: '/home',
  permanent: true,
  sassOptions: {
    prependData: '@import "~styles/globals.scss";',
  },

  webpack (config, options) {

    // Markdown Loader
    config.module.rules.push(
      {
        test: /\.md$/i,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: true,
            },
          }
        ]
      }
    )
    
    // Production-specific configuration
    if (!options.dev) {
      config.plugins.push(
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en_au/)
      );
    }
    
    config.resolve.modules.push(srcPath);
    return config;
  }
});

