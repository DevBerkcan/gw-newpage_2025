'use client';

import { m } from 'framer-motion';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade } from 'src/components/animate';
import { Iconify } from 'src/components/iconify/iconify';

// ----------------------------------------------------------------------

const TIMELINE_STEPS = [
  {
    phase: 'Phase 1',
    title: 'Discovery & Planning',
    duration: '1-2 Wochen',
    icon: 'solar:lightbulb-bolt-outline',
    description:
      'Analyse Ihrer Anforderungen, Zieldefinition, Wettbewerbsanalyse und Erstellung eines detaillierten Projektplans.',
    deliverables: ['Kick-off Meeting', 'Requirements Doc', 'Wireframes', 'Project Roadmap'],
    color: 'primary',
  },
  {
    phase: 'Phase 2',
    title: 'Design & Prototyping',
    duration: '2-3 Wochen',
    icon: 'solar:palette-outline',
    description:
      'UI/UX Design, Branding-Konzept, interaktive Prototypen und Design-System-Entwicklung für konsistente User Experience.',
    deliverables: ['Design System', 'High-Fidelity Mockups', 'Interactive Prototype', 'Style Guide'],
    color: 'secondary',
  },
  {
    phase: 'Phase 3',
    title: 'Development',
    duration: '4-8 Wochen',
    icon: 'solar:code-outline',
    description:
      'Agile Entwicklung mit modernen Technologien, kontinuierliche Code-Reviews und wöchentliche Sprint-Demos.',
    deliverables: ['Frontend Development', 'Backend APIs', 'Database Setup', 'Integrations'],
    color: 'info',
  },
  {
    phase: 'Phase 4',
    title: 'Testing & QA',
    duration: '1-2 Wochen',
    icon: 'solar:bug-minimalistic-outline',
    description:
      'Umfassende Tests auf allen Geräten, Performance-Optimierung, Security-Audits und User Acceptance Testing.',
    deliverables: ['Unit Tests', 'E2E Tests', 'Performance Report', 'Security Audit'],
    color: 'success',
  },
  {
    phase: 'Phase 5',
    title: 'Deployment & Launch',
    duration: '1 Woche',
    icon: 'solar:rocket-outline',
    description:
      'CI/CD Pipeline-Setup, Produktions-Deployment, Monitoring-Integration und Post-Launch-Support.',
    deliverables: ['Production Deploy', 'Monitoring Setup', 'Documentation', 'Training'],
    color: 'warning',
  },
  {
    phase: 'Phase 6',
    title: 'Maintenance & Growth',
    duration: 'Ongoing',
    icon: 'solar:settings-outline',
    description:
      'Kontinuierliche Updates, Performance-Monitoring, Feature-Erweiterungen und 24/7 Support-Verfügbarkeit.',
    deliverables: ['Regular Updates', 'Analytics Reports', 'Feature Releases', '24/7 Support'],
    color: 'error',
  },
];

// ----------------------------------------------------------------------

export function HomeProjectTimeline() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? 'background.default' : 'background.neutral',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: 'center' }}>
          <m.div variants={varFade('inUp', { distance: 40 })} initial="initial" animate="animate">
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                mb: 2,
                display: 'block',
              }}
            >
              Unser Prozess
            </Typography>
          </m.div>

          <m.div
            variants={varFade('inUp', { distance: 40 })}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
          >
            <Typography variant="h2" sx={{ mb: 3 }}>
              Von der Idee zum{' '}
              <Box
                component="span"
                sx={{
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                fertigen Produkt
              </Box>
            </Typography>
          </m.div>

          <m.div
            variants={varFade('inUp', { distance: 40 })}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto' }}>
              Ein bewährter 6-Phasen-Prozess für erfolgreiche Digitalprojekte. Transparent,
              planbar und mit messbaren Ergebnissen.
            </Typography>
          </m.div>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 24, md: '50%' },
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.24),
              display: { xs: 'block', md: 'block' },
            }}
          />

          {/* Timeline Steps */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {TIMELINE_STEPS.map((step, index) => (
              <TimelineStep
                key={step.phase}
                step={step}
                index={index}
                isActive={activeStep === index}
                onHover={() => setActiveStep(index)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TimelineStep({ step, index, isActive, onHover }) {
  const theme = useTheme();
  const isEven = index % 2 === 0;

  return (
    <m.div
      variants={varFade('inUp', { distance: 40 })}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={onHover}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'grid',
          gap: 4,
          gridTemplateColumns: { xs: '1fr', md: isEven ? '1fr 1fr' : '1fr 1fr' },
        }}
      >
        {/* Icon Circle */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 24, md: '50%' },
            transform: { xs: 'translateX(-50%)', md: 'translateX(-50%)' },
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              display: 'flex',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.paper',
              border: (theme) => `4px solid ${theme.palette[step.color].main}`,
              boxShadow: (theme) =>
                isActive ? `0 0 0 8px ${alpha(theme.palette[step.color].main, 0.16)}` : 'none',
              transition: (theme) =>
                theme.transitions.create(['box-shadow', 'transform'], {
                  duration: theme.transitions.duration.standard,
                }),
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Iconify icon={step.icon} width={32} sx={{ color: `${step.color}.main` }} />
          </Box>
        </Box>

        {/* Content */}
        <Box
          sx={{
            order: { xs: 2, md: isEven ? 1 : 2 },
            pl: { xs: 8, md: 0 },
            pr: { xs: 0, md: isEven ? 8 : 0 },
            textAlign: { xs: 'left', md: isEven ? 'right' : 'left' },
          }}
        >
          {/* Empty space for desktop layout */}
          {!isEven && <Box sx={{ display: { xs: 'none', md: 'block' } }} />}
        </Box>

        <Box
          sx={{
            order: { xs: 2, md: isEven ? 2 : 1 },
            pl: { xs: 8, md: isEven ? 8 : 0 },
            pr: { xs: 0, md: isEven ? 0 : 8 },
          }}
        >
          <Box
            sx={{
              p: 4,
              borderRadius: 2,
              bgcolor: 'background.paper',
              border: (theme) =>
                `1px solid ${isActive ? theme.palette[step.color].main : alpha(theme.palette.grey[500], 0.12)}`,
              boxShadow: (theme) => (isActive ? theme.customShadows.z20 : 'none'),
              transition: (theme) =>
                theme.transitions.create(['border-color', 'box-shadow', 'transform'], {
                  duration: theme.transitions.duration.standard,
                }),
              '&:hover': {
                transform: 'scale(1.02)',
                borderColor: (theme) => theme.palette[step.color].main,
              },
            }}
          >
            {/* Phase & Duration */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  color: `${step.color}.main`,
                  fontWeight: 700,
                }}
              >
                {step.phase}
              </Typography>
              <Box
                sx={{
                  flex: 1,
                  height: 1,
                  bgcolor: (theme) => alpha(theme.palette.grey[500], 0.24),
                }}
              />
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {step.duration}
              </Typography>
            </Box>

            {/* Title */}
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
              {step.title}
            </Typography>

            {/* Description */}
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              {step.description}
            </Typography>

            {/* Deliverables */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {step.deliverables.map((deliverable) => (
                <Box
                  key={deliverable}
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    bgcolor: (theme) => alpha(theme.palette[step.color].main, 0.08),
                    border: (theme) => `1px solid ${alpha(theme.palette[step.color].main, 0.24)}`,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: `${step.color}.darker`,
                      fontWeight: 600,
                    }}
                  >
                    {deliverable}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </m.div>
  );
}
