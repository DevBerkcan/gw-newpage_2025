'use client';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.modal + 1,
  backgroundColor: alpha(theme.palette.background.paper, 0.95),
  backdropFilter: 'blur(20px)',
  borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  padding: theme.spacing(2.5, 0),
  boxShadow: `0 -4px 20px ${alpha(theme.palette.common.black, 0.1)}`,
  transform: 'translateY(100%)',
  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&.visible': {
    transform: 'translateY(0)',
  },
}));

// ----------------------------------------------------------------------

const COOKIE_KEY = 'gentle-webdesign-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);

    // Enable Google Analytics or other tracking here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);

    // Disable tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  if (!visible) return null;

  return (
    <StyledRoot className={visible ? 'visible' : ''}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 3,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* Text Content */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              🍪 Wir nutzen Cookies
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die
              Nutzung unserer Website stimmen Sie unserer{' '}
              <Link
                component={RouterLink}
                href="/datenschutz"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'underline',
                  '&:hover': { color: 'primary.dark' },
                }}
              >
                Datenschutzerklärung
              </Link>{' '}
              und{' '}
              <Link
                component={RouterLink}
                href="/impressum"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'underline',
                  '&:hover': { color: 'primary.dark' },
                }}
              >
                Cookie-Richtlinie
              </Link>{' '}
              zu.
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              flexShrink: 0,
              flexDirection: { xs: 'column', sm: 'row' },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleReject}
              sx={{
                minWidth: { xs: '100%', sm: 140 },
                borderColor: 'divider',
                '&:hover': {
                  borderColor: 'text.primary',
                  bgcolor: alpha('#000', 0.04),
                },
              }}
            >
              Ablehnen
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleAccept}
              sx={{
                minWidth: { xs: '100%', sm: 140 },
                boxShadow: (theme) =>
                  `0 8px 16px ${alpha(theme.palette.primary.main, 0.24)}`,
                '&:hover': {
                  boxShadow: (theme) =>
                    `0 12px 20px ${alpha(theme.palette.primary.main, 0.32)}`,
                },
              }}
            >
              Akzeptieren
            </Button>
          </Box>
        </Box>
      </Container>
    </StyledRoot>
  );
}
