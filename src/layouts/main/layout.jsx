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
import { LanguagePopover } from '../components/language-popover';
import { PurchaseButton } from '../components/purchase-button';

/* -------------------------------------------------
   Social Media Button (LinkedIn)
----------------------------------------------------------- */
function SocialMediaButton({ sx }) {
  const IconifyComp =
    typeof Iconify === 'function'
      ? Iconify
      : typeof Iconify?.default === 'function'
      ? Iconify.default
      : null;

  return (
    <Tooltip title="LinkedIn" arrow>
      <IconButton
        component="a"
        href="https://www.linkedin.com/company/gentle-webdesign"
        target="_blank"
        rel="noopener noreferrer"
        disableRipple
        size="small"
        sx={{
          width: 32,
          height: 32,
          p: 0,
          bgcolor: 'transparent',
          color: '#0A66C2',
          transition: 'transform .15s ease',
          '&:hover': { bgcolor: 'transparent', transform: 'translateY(-1px)' },
          ...sx,
        }}
      >
        {IconifyComp ? (
          <IconifyComp icon="eva:linkedin-fill" width={22} height={22} />
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
          </svg>
        )}
      </IconButton>
    </Tooltip>
  );
}

/* -------------------------------------------------
   Telefon-Button (grün, 40x40, Iconify Icon)
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
        size="medium"
        sx={{
          width: 40,
          height: 40,
          p: 0,
          bgcolor: 'transparent',
          color: iconColor,
          transition: 'transform .15s ease',
          '&:hover': { bgcolor: 'transparent', transform: 'translateY(-1px)' },
          '& .iconify': {
            color: iconColor,
            filter: 'drop-shadow(0 1px 1px rgba(0,0,0,.18))',
          },
          ...sx,
        }}
      >
        {IconifyComp ? (
          <IconifyComp icon="solar:phone-calling-bold-duotone" width={24} height={24} />
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Telefon" fill={iconColor}>
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
          {/* Language Switcher DE/EN mit Flaggen */}
          <LanguagePopover data={langs} />

          {/* LinkedIn Icon */}
          <SocialMediaButton />

          {/* Telefon Icon */}
          <PhoneCallButton phoneDisplay="01754701832" phoneHref="+491754701832" />

          {/* Moon / Sun Toggle */}
          <ThemeModeToggle />

          {/* Book Meeting Button ganz rechts */}
          <PurchaseButton data={langs} />
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
