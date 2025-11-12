/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  },
  optimizeFonts: true,
}

module.exports = nextConfig
