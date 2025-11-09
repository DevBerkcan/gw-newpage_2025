'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { m } from 'framer-motion';

import { CONFIG } from 'src/global-config';
import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function OfflinePage() {
  const handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <Container
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 10,
      }}
    >
      <m.div variants={varFade('inUp', { distance: 40 })} initial="initial" animate="animate">
        {/* Offline Icon */}
        <Box
          sx={{
            mb: 5,
            width: 200,
            height: 200,
            mx: 'auto',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.100' : 'grey.800'),
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.3"
            />
          </svg>
        </Box>

        {/* Heading */}
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          Sie sind offline
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, maxWidth: 480 }}>
          Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut. Diese Seite
          wird automatisch geladen, sobald Sie wieder online sind.
        </Typography>

        {/* Reload Button */}
        <Button
          variant="contained"
          size="large"
          onClick={handleReload}
          sx={{
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            px: 4,
            py: 1.5,
          }}
        >
          Erneut versuchen
        </Button>
      </m.div>

      {/* Auto-reload on connection */}
      <Typography variant="caption" sx={{ mt: 8, color: 'text.disabled' }}>
        Oder warten Sie, bis die Verbindung wiederhergestellt ist...
      </Typography>
    </Container>
  );
}
