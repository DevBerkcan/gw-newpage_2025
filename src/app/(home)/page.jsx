import { HomeView } from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Gentle Webdesign | Digital Solutions die begeistern - Webdesign, Apps & KI-Automationen',
  description:
    'Professionelle Werbeagentur für Webdesign, Web-Apps, KI-Lösungen & E-Commerce. Von der Idee bis zum Go-Live - messbar, sicher und skalierbar. Next.js, React & moderne Technologien.',
  keywords: 'Werbeagentur, Webdesign, Web-App Entwicklung, KI-Automationen, E-Commerce, Shopify, Next.js, React, Full-Stack Development, SharePoint, Microsoft 365, Digital Marketing, Branding, UI/UX Design',
  authors: [{ name: 'Gentle Webdesign' }],
  creator: 'Gentle Webdesign',
  publisher: 'Gentle Webdesign',
  openGraph: {
    title: 'Gentle Webdesign | Digital Solutions die begeistern',
    description: 'Professionelle Werbeagentur für Webdesign, Web-Apps, KI-Lösungen & E-Commerce. Von der Idee bis zum Go-Live.',
    url: 'https://gentlewebdesign.de',
    siteName: 'Gentle Webdesign',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gentle Webdesign | Digital Solutions die begeistern',
    description: 'Professionelle Werbeagentur für Webdesign, Web-Apps, KI-Lösungen & E-Commerce.',
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
};

export default function Page() {
  return <HomeView />;
}
