/** @type {import('next').NextConfig} */
module.exports = {
  // Performance Optimierungen für Weltklasse-Website
  experimental: {
    optimizePackageImports: [
      '@mui/material',
      '@mui/icons-material',
      '@mui/x-date-pickers',
      'lodash',
      'date-fns',
      'framer-motion',
    ],
  },

  // Bildoptimierung
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compiler-Optimierungen
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Bundle-Analyse & Tree-Shaking
  swcMinify: true,

  // Security Headers für bessere Sicherheit
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ];
  },

  // Produktions-Optimierungen
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
};