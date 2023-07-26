/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  concurrentFeatures: true,
  productionBrowserSourceMaps: false, // Disable source maps in development
  optimizeFonts: false, // Disable font optimization
  minify: false, // Disable minification
};
