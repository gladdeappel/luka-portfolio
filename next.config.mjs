/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  server: {
    port: process.env.PORT || 3000,
  },
  
  compress: true,
  productionBrowserSourceMaps: false, 
}

export default nextConfig
