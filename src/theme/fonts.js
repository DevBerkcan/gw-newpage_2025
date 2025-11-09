/**
 * Font Optimization with next/font
 * Using Google Fonts API for optimal loading and performance
 */

import { Public_Sans, Barlow } from 'next/font/google';

// Primary Font: Public Sans (Variable)
export const publicSans = Public_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-public-sans',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  preload: true,
  adjustFontFallback: true,
});

// Secondary Font: Barlow
export const barlow = Barlow({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
  fallback: ['Arial', 'sans-serif'],
  preload: true,
  adjustFontFallback: true,
});

// CSS Variables for Material-UI integration
export const fontVariables = `${publicSans.variable} ${barlow.variable}`;

// Font family strings for Material-UI theme
export const fontFamilies = {
  primary: `var(--font-public-sans), ${publicSans.style.fontFamily}`,
  secondary: `var(--font-barlow), ${barlow.style.fontFamily}`,
};
