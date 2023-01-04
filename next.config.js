/** @type {import('next').NextConfig} */
const path = require('path');
const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...nextTranslate(),
}

module.exports = nextConfig;