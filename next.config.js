/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    optimizePackageImports: [
      '@mui/material',
      '@mui/icons-material',
      '@mui/x-date-pickers',
      'lodash',
      'date-fns'
    ],
  },
};