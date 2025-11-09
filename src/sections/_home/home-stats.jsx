'use client';

import { m, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const STATS = [
  {
    value: 150,
    suffix: '+',
    label: 'Erfolgreiche Projekte',
    description: 'Websites, Apps & KI-Lösungen',
    color: 'primary',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Kundenzufriedenheit',
    description: 'Basierend auf Reviews',
    color: 'success',
  },
  {
    value: 5,
    suffix: 'J+',
    label: 'Branchenerfahrung',
    description: 'Im digitalen Marketing',
    color: 'info',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Support verfügbar',
    description: 'Für Premium-Kunden',
    color: 'warning',
  },
];

// ----------------------------------------------------------------------

export function HomeStats() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? 'grey.100' : alpha(theme.palette.grey[900], 0.4),
      }}
    >
      {/* Background Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
          pointerEvents: 'none',
        }}
      />

      <Container>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 6 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function StatCard({ stat, index }) {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <m.div
      ref={ref}
      variants={varFade('inUp', { distance: 40 })}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Box
        sx={{
          p: 4,
          height: '100%',
          borderRadius: 2,
          textAlign: 'center',
          position: 'relative',
          bgcolor: 'background.paper',
          transition: (theme) =>
            theme.transitions.create(['transform', 'box-shadow'], {
              duration: theme.transitions.duration.standard,
            }),
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        {/* Icon Background Circle */}
        <Box
          sx={{
            width: 80,
            height: 80,
            mx: 'auto',
            mb: 3,
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            background: (theme) =>
              `linear-gradient(135deg, ${alpha(theme.palette[stat.color].main, 0.2)} 0%, ${alpha(theme.palette[stat.color].light, 0.1)} 100%)`,
            border: (theme) => `2px solid ${alpha(theme.palette[stat.color].main, 0.24)}`,
          }}
        >
          {/* Counter */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette[stat.color].main} 0%, ${theme.palette[stat.color].dark} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {count}
            {count === stat.value && stat.suffix}
          </Typography>
        </Box>

        {/* Label */}
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
          {stat.label}
        </Typography>

        {/* Description */}
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {stat.description}
        </Typography>

        {/* Bottom Accent Line */}
        <Box
          sx={{
            mt: 3,
            mx: 'auto',
            width: 48,
            height: 4,
            borderRadius: 1,
            bgcolor: (theme) => alpha(theme.palette[stat.color].main, 0.24),
          }}
        />
      </Box>
    </m.div>
  );
}
