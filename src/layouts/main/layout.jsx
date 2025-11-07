'use client';

import { useState, useEffect } from 'react';
import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useColorScheme } from '@mui/material/styles';

import { usePathname } from 'src/routes/hooks';
// ⬇️ ggf. Pfad anpassen
import { useSettingsContext } from 'src/components/settings/context/use-settings-context';

import Iconify from 'src/components/iconify'; // Zone-UI wrapper (default export)
import { Logo } from 'src/components/logo';

import { Footer } from './footer';
import { langs } from '../langs-config';
import { NavMobile } from './nav/mobile';
import { NavDesktop } from './nav/desktop';
import { HomeFooter } from './home-footer';
import { navData } from '../nav-config-main';
import { MainSection } from '../core/main-section';
// import { Searchbar } from '../components/searchbar';
import { MenuButton } from '../components/menu-button';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
// import { SocialIconBtn } from '../components/si-button'; // entfernt
import { PurchaseButton } from '../components/purchase-button';

/* -------------------------------------------------
   Telefon-Button (grün, 40x40, mingcute-Icon)
----------------------------------------------------------- */
function PhoneCallButton({
  phoneDisplay = '01754701832',
  phoneHref = '+491754701832',
  iconColor = '#01ffa9',
  sx,
}) {
  const IconifyComp =
    typeof Iconify === 'function'
      ? Iconify
      : typeof Iconify?.default === 'function'
      ? Iconify.default
      : null;

  return (
    <Tooltip title={`Anrufen: ${phoneDisplay}`} arrow>
      <IconButton
        component="a"
        href={`tel:${phoneHref}`}
        aria-label={`Anrufen ${phoneDisplay}`}
        rel="nofollow"
        disableRipple
        size="medium"             // 40x40
        sx={{
          width: 40,
          height: 40,
          p: 0,
          bgcolor: 'transparent',
          color: iconColor,       // fallback falls Icon currentColor nutzt
          transition: 'transform .15s ease',
          '&:hover': { bgcolor: 'transparent', transform: 'translateY(-1px)' },
          '& .iconify': {
            color: iconColor,     // Iconify explizit grün
            filter: 'drop-shadow(0 1px 1px rgba(0,0,0,.18))',
          },
          ...sx,
        }}
      >
        {IconifyComp ? (
          <IconifyComp icon="mingcute:phone-fill" width={20} height={20} />
        ) : (
          // Fallback-SVG
          <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-label="Telefon" fill={iconColor}>
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
          </svg>
        )}
      </IconButton>
    </Tooltip>
  );
}

/* -----------------------------------------------------------
   Kompakter Moon/Sun Toggle
----------------------------------------------------------- */
function ThemeModeToggle({ sx }) {
  const settings = useSettingsContext();               // muss definiert sein
  const { mode, setMode, systemMode } = useColorScheme(); // MUI CssVarsProvider

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const effectiveMode =
    settings?.state?.colorScheme ??
    (mode === 'system' ? systemMode : mode) ??
    'light';

  const isDark = effectiveMode === 'dark';

  const applyAll = (next) => {
    if (typeof setMode === 'function') setMode(next);
    settings?.setState?.({ colorScheme: next });
    settings?.onUpdate?.('themeMode', next);
    settings?.onUpdateThemeMode?.(next);
    settings?.setThemeMode?.(next);
  };

  const toggle = () => applyAll(isDark ? 'light' : 'dark');

  if (!mounted) {
    return <IconButton aria-label="Theme mode" size="small" disabled sx={{ width: 32, height: 32, p: 0 }} />;
  }

  const IconifyComp =
    typeof Iconify === 'function'
      ? Iconify
      : typeof Iconify?.default === 'function'
      ? Iconify.default
      : null;

  const iconName = isDark ? 'solar:sun-2-bold-duotone' : 'solar:moon-stars-bold-duotone';

  return (
    <Tooltip title={isDark ? 'Light mode' : 'Dark mode'} arrow>
      <IconButton
        aria-label="Theme mode"
        onClick={toggle}
        disableRipple
        size="small"
        sx={{
          width: 32,
          height: 32,
          p: 0,
          bgcolor: 'transparent',
          color: (t) => (isDark ? t.palette.grey[100] : t.palette.text.primary),
          transition: 'transform .15s ease',
          '&:hover': { bgcolor: 'transparent', transform: 'translateY(-1px)' },
          '& .iconify': {
            filter: isDark
              ? 'drop-shadow(0 1px 1px rgba(255,255,255,.25))'
              : 'drop-shadow(0 1px 1px rgba(0,0,0,.18))',
          },
          ...sx,
        }}
      >
        {IconifyComp ? (
          <IconifyComp icon={iconName} width={20} height={20} />
        ) : (
          isDark ? (
            <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-label="Sun">
              <path fill="currentColor" d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79l1.8-1.79m10.48 0l1.79-1.79l1.79 1.79l-1.79 1.79l-1.79-1.79M12 4V1h0v3h0m0 19v-3h0v3h0M4 12H1v0h3v0m19 0h-3v0h3v0M6.76 19.16l-1.8 1.79l-1.79-1.79l1.79-1.79l1.8 1.79M19.24 19.16l1.79 1.79l1.79-1.79l-1.79-1.79l-1.79 1.79M12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-label="Moon">
              <path fill="currentColor" d="M12 2a1 1 0 0 1 .9.55a7 7 0 1 0 8.55 8.55A1 1 0 0 1 22 12a10 10 0 1 1-10-10Z"/>
              <circle cx="5" cy="6" r="0.9" fill="currentColor"/><circle cx="7.2" cy="8.2" r="0.6" fill="currentColor"/>
            </svg>
          )
        )}
      </IconButton>
    </Tooltip>
  );
}

// ----------------------------------------------------------------------

export function MainLayout({ sx, cssVars, children, slotProps, layoutQuery = 'md' }) {
  const pathname = usePathname();
  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();
  const homePage = pathname === '/';

  const renderHeader = () => {
    const headerSlots = {
      topArea: (
        <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
          This is an info Alert.
        </Alert>
      ),
      leftArea: (
        <>
          {/* @slot Nav mobile */}
          <MenuButton
            onClick={onOpen}
            sx={(theme) => ({
              mr: 1,
              ml: -1,
              [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
            })}
          />
          <NavMobile data={navData} open={open} onClose={onClose} />

          {/* @slot Logo */}
          <Logo />
        </>
      ),
      centerArea: (
        <NavDesktop
          data={navData}
          sx={(theme) => ({
            display: 'none',
            [theme.breakpoints.up(layoutQuery)]: { display: 'flex' },
          })}
        />
      ),
      rightArea: (
        <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
          {/* <Searchbar /> */}

          {/* Telefon links vom CTA */}
          <PhoneCallButton phoneDisplay="01754701832" phoneHref="+491754701832" />

          {/* Dein CTA/Shop-Button */}
          <PurchaseButton data={langs} />

          {/* Moon / Sun Toggle rechts */}
          <ThemeModeToggle />
        </Box>
      ),
    };

    return (
      <HeaderSection
        layoutQuery={layoutQuery}
        {...slotProps?.header}
        slots={{ ...headerSlots, ...slotProps?.header?.slots }}
        slotProps={slotProps?.header?.slotProps}
        sx={slotProps?.header?.sx}
      />
    );
  };

  const renderFooter = () => (homePage ? <HomeFooter /> : <Footer layoutQuery={layoutQuery} />);

  const renderMain = () => <MainSection {...slotProps?.main}>{children}</MainSection>;

  return (
    <LayoutSection
      /** **************************************
       * @Header
       *************************************** */
      headerSection={renderHeader()}
      /** **************************************
       * @Footer
       *************************************** */
      footerSection={renderFooter()}
      /** **************************************
       * @Styles
       *************************************** */
      cssVars={cssVars}
      sx={sx}
    >
      {renderMain()}
    </LayoutSection>
  );
}
