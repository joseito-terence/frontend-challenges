/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: { 
    images: { allowFutureImage: true } 
  }
}

module.exports = nextConfig