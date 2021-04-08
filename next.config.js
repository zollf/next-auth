/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

require('dotenv').config();

module.exports = withPlugins([
  bundleAnalyzer,
], {
  sassOptions: {
    prependData: '@import "~styles/globals.scss";',
  },
});
