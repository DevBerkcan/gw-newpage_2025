'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
};

// ----------------------------------------------------------------------

export function ScrollReveal({
  children,
  variant = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  sx,
  ...other
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const selectedVariant = variants[variant] || variants.fadeInUp;

  return (
    <Box
      component={m.div}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      sx={sx}
      {...other}
    >
      {children}
    </Box>
  );
}
