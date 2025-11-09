import 'src/global.css';

import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { CONFIG } from 'src/global-config';
import { LocalizationProvider } from 'src/locales';
import { themeConfig, ThemeProvider } from 'src/theme';
import { themeOverrides } from 'src/theme/theme-overrides';
import { fontVariables } from 'src/theme/fonts';

import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { CookieBanner } from 'src/components/cookie-banner';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';
import { RegisterServiceWorker } from 'src/components/register-sw';
import { SkipLink } from 'src/components/skip-link';

// ----------------------------------------------------------------------

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata = {
  icons: [
    {
      rel: 'icon',
      url: `${CONFIG.assetsDir}/favicon.ico`,
    },
  ],
};

export default async function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning className={fontVariables}>
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#A97AFF" />
      </head>
      <body>
        {/* Skip Link for Accessibility */}
        <SkipLink />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVTSGS3W"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NVTSGS3W');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Formless.ai Embed */}
        <Script
          src="https://embed.formless.ai/embed.js"
          strategy="lazyOnload"
          data-type="trigger"
          data-trigger-bg-color="#171717"
          data-trigger-icon-color="#ffffff"
          data-trigger-icon-type="chat"
          data-conversation-id="FvZ04jODz1il"
        />
        {/* End Formless.ai Embed */}

        {/* Service Worker Registration for PWA */}
        <RegisterServiceWorker />

        <InitColorSchemeScript
          defaultMode={themeConfig.defaultMode}
          modeStorageKey={themeConfig.modeStorageKey}
          attribute={themeConfig.cssVariables.colorSchemeSelector}
        />

        <SettingsProvider defaultSettings={defaultSettings}>
          <LocalizationProvider>
            <AppRouterCacheProvider options={{ key: 'css' }}>
              <ThemeProvider
                themeOverrides={themeOverrides}
                defaultMode={themeConfig.defaultMode}
                modeStorageKey={themeConfig.modeStorageKey}
              >
                <MotionLazy>
                  <ProgressBar />
                  <SettingsDrawer defaultSettings={defaultSettings} />
                  <CookieBanner />
                  {children}
                </MotionLazy>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </LocalizationProvider>
        </SettingsProvider>

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
