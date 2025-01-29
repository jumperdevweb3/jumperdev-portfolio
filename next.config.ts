import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

export default nextConfig