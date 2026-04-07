import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      { source: '/de/:path*', destination: '/', permanent: true },
      { source: '/es/:path*', destination: '/', permanent: true },
      { source: '/cart/add', destination: '/cart', permanent: true },
      { source: '/policies/:path*', destination: '/faq', permanent: true },
      { source: '/pages/contact', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;