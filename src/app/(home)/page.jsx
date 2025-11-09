import { HomeView } from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

export const metadata = {
  metadataBase: new URL('https://gentle-webdesign.de'),
  title: 'Gentle Webdesign | Digital Solutions die begeistern - Webdesign, Apps & KI-Automationen',
  description:
    'Professionelle Werbeagentur für Webdesign, Web-Apps, KI-Lösungen & E-Commerce. Von der Idee bis zum Go-Live - messbar, sicher und skalierbar. Next.js, React & moderne Technologien.',
  keywords:
    'Werbeagentur, Webdesign, Web-App Entwicklung, KI-Automationen, E-Commerce, Shopify, Next.js, React, Full-Stack Development, SharePoint, Microsoft 365, Digital Marketing, Branding, UI/UX Design',
  authors: [{ name: 'Gentle Webdesign', url: 'https://gentle-webdesign.de' }],
  creator: 'Gentle Webdesign',
  publisher: 'Gentle Webdesign',
  alternates: {
    canonical: 'https://gentle-webdesign.de',
    languages: {
      'de-DE': 'https://gentle-webdesign.de',
      'en-US': 'https://gentle-webdesign.de/en',
    },
  },
  openGraph: {
    title: 'Gentle Webdesign | Digital Solutions die begeistern',
    description:
      'Professionelle Werbeagentur für Webdesign, Web-Apps, KI-Lösungen & E-Commerce. Von der Idee bis zum Go-Live.',
    url: 'https://gentle-webdesign.de',
    siteName: 'Gentle Webdesign',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gentle Webdesign - Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gentle Webdesign | Digital Solutions die begeistern',
    description: 'Professionelle Werbeagentur für Webdesign, Web-Apps, KI-Lösungen & E-Commerce.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // TODO: Add Google Search Console verification code
  },
};

export default function Page() {
  return <HomeView />;
}
