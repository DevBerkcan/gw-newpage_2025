'use client';

import { m, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';

import { Logo } from 'src/components/logo';

// ----------------------------------------------------------------------

const StyledWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  pointerEvents: 'none',
  transition: 'opacity 0.3s ease',
}));

const StyledBackground = styled(m.div)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(135deg,
    ${alpha(theme.palette.background.default, 0.98)} 0%,
    ${alpha(theme.palette.background.default, 0.95)} 100%
  )`,
  backdropFilter: 'blur(20px)',
}));

// ----------------------------------------------------------------------

export function LogoIntro() {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollY } = useScroll();

  // Transform values based on scroll
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.3]);
  const logoY = useTransform(scrollY, [0, 300], [0, -45]);
  const logoX = useTransform(scrollY, [0, 300], [0, -45]);
  const backgroundOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const wrapperOpacity = useTransform(scrollY, [300, 400], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (latest > 400) {
        setIsComplete(true);
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  if (isComplete) return null;

  return (
    <StyledWrapper
      component={m.div}
      style={{
        opacity: wrapperOpacity,
      }}
    >
      {/* Background Blur */}
      <StyledBackground
        style={{
          opacity: backgroundOpacity,
        }}
      />

      {/* Animated Gradient Circles */}
      <Box
        component={m.div}
        sx={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          opacity: backgroundOpacity,
        }}
      />

      {/* Logo */}
      <Box
        component={m.div}
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
        style={{
          scale: logoScale,
          y: logoY,
          x: logoX,
        }}
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Logo
          sx={{
            width: { xs: 180, md: 280 },
            height: { xs: 180, md: 280 },
          }}
        />

        {/* Glow Effect */}
        <Box
          component={m.div}
          sx={{
            position: 'absolute',
            inset: -20,
            borderRadius: '50%',
            background: (theme) =>
              `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.3)} 0%, transparent 70%)`,
            filter: 'blur(40px)',
            zIndex: -1,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </Box>

      {/* Loading Text */}
      <Box
        component={m.div}
        sx={{
          position: 'absolute',
          bottom: '20%',
          textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          opacity: backgroundOpacity,
        }}
      >
        <Box
          component={m.div}
          sx={{
            width: 60,
            height: 2,
            mx: 'auto',
            mb: 2,
            background: (theme) =>
              `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
          }}
          animate={{
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </Box>
    </StyledWrapper>
  );
}
