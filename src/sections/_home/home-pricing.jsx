import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

const variants = varFade('inUp', { distance: 24 });

// ----------------------------------------------------------------------

// Wartungsvertrags-Pakete
const MAINTENANCE_PLANS = [
  {
    name: 'Basic',
    price: 299,
    period: 'Monat',
    popular: false,
    description: 'Perfekt für kleine Websites und Startups',
    features: [
      { text: 'Monatliche Updates & Patches', available: true },
      { text: 'Performance-Monitoring', available: true },
      { text: 'Sicherheits-Scans', available: true },
      { text: 'Backup (wöchentlich)', available: true },
      { text: 'E-Mail Support (48h)', available: true },
      { text: 'Bug-Fixes (2h/Monat)', available: true },
      { text: 'Notfall-Hotline 24/7', available: false },
      { text: 'Dedizierter DevOps-Support', available: false },
      { text: 'Feature-Entwicklung', available: false },
    ],
  },
  {
    name: 'Professional',
    price: 699,
    period: 'Monat',
    popular: true,
    description: 'Ideal für wachsende Unternehmen',
    features: [
      { text: 'Monatliche Updates & Patches', available: true },
      { text: 'Performance-Monitoring & Optimierung', available: true },
      { text: 'Tägliche Sicherheits-Scans', available: true },
      { text: 'Backup (täglich)', available: true },
      { text: 'Priority Support (12h)', available: true },
      { text: 'Bug-Fixes (6h/Monat)', available: true },
      { text: 'Notfall-Hotline 24/7', available: true },
      { text: 'Azure DevOps Integration', available: true },
      { text: 'Feature-Entwicklung (4h/Monat)', available: true },
    ],
  },
  {
    name: 'Enterprise',
    price: 1499,
    period: 'Monat',
    popular: false,
    description: 'Vollumfängliche Betreuung für kritische Systeme',
    features: [
      { text: 'Continuous Updates & Patches', available: true },
      { text: 'Advanced Performance-Optimierung', available: true },
      { text: 'Security-Audits & Penetration Tests', available: true },
      { text: 'Backup (stündlich + Geo-Redundanz)', available: true },
      { text: 'Dedicated Support (4h)', available: true },
      { text: 'Unbegrenzte Bug-Fixes', available: true },
      { text: 'Notfall-Hotline 24/7 mit SLA', available: true },
      { text: 'Dedizierter DevOps Engineer', available: true },
      { text: 'Feature-Entwicklung (15h/Monat)', available: true },
    ],
  },
];

export function HomePricing({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          py: { xs: 10, md: 15 },
          bgcolor: theme.palette.mode === 'light' ? 'grey.100' : 'background.neutral',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Box sx={{ mx: 'auto', maxWidth: 640, textAlign: 'center', mb: { xs: 5, md: 10 } }}>
          <m.div variants={variants}>
            <Typography variant="overline" sx={{ color: 'text.disabled', mb: 2, display: 'block' }}>
              Wartungs- & Support-Pakete
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Software-Wartungsverträge
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography sx={{ color: 'text.secondary' }}>
              Professionelle Wartung, kontinuierliche Updates und technischer Support –
              damit Ihre digitale Infrastruktur sicher, performant und zukunftsfähig bleibt.
            </Typography>
          </m.div>
        </Box>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            alignItems: 'flex-start',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {MAINTENANCE_PLANS.map((plan, index) => (
            <m.div key={plan.name} variants={varFade('inUp', { distance: 24, delay: 0.1 * index })}>
              <MaintenanceCard plan={plan} />
            </m.div>
          ))}
        </Box>

        {/* Zusätzliche Info */}
        <m.div variants={variants}>
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 2,
              textAlign: 'center',
              border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
              bgcolor: (theme) => (theme.palette.mode === 'light' ? 'background.paper' : 'grey.900'),
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              Individuelle Lösungen gewünscht?
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Kontaktieren Sie uns für maßgeschneiderte Enterprise-Pakete mit SLA-Garantien und dediziertem Support-Team.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              href={paths.marketing.contact}
              endIcon={<Iconify icon="solar:arrow-right-outline" />}
            >
              Beratungsgespräch vereinbaren
            </Button>
          </Box>
        </m.div>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function MaintenanceCard({ plan }) {
  const isPopular = plan.popular;

  return (
    <Paper
      variant="outlined"
      sx={[
        (theme) => ({
          p: 5,
          gap: 3,
          height: 1,
          display: 'flex',
          borderRadius: 3,
          position: 'relative',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          transition: 'all 0.3s ease',
          border: `2px solid ${theme.vars.palette.divider}`,
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.vars.customShadows.z24,
          },
        }),
        (theme) =>
          isPopular && {
            py: 6,
            border: `2px solid ${theme.vars.palette.primary.main}`,
            boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.primary.mainChannel, 0.24)}`,
          },
      ]}
    >
      {/* Popular Badge */}
      {isPopular && (
        <Label
          color="primary"
          sx={{
            position: 'absolute',
            top: 24,
            right: 24,
            textTransform: 'uppercase',
          }}
        >
          Beliebt
        </Label>
      )}

      {/* Header */}
      <Box>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {plan.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: 40 }}>
          {plan.description}
        </Typography>
      </Box>

      {/* Price */}
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          €{plan.price}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          / {plan.period}
        </Typography>
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />

      {/* Features List */}
      <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {plan.features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              gap: 1.5,
              display: 'flex',
              alignItems: 'flex-start',
              typography: 'body2',
              color: feature.available ? 'text.primary' : 'text.disabled',
            }}
          >
            <Iconify
              width={20}
              icon={feature.available ? 'eva:checkmark-circle-2-fill' : 'eva:close-circle-outline'}
              sx={{
                mt: 0.25,
                flexShrink: 0,
                color: feature.available ? 'success.main' : 'text.disabled',
              }}
            />
            <span>{feature.text}</span>
          </Box>
        ))}
      </Box>

      {/* CTA Button */}
      <Button
        size="large"
        fullWidth
        variant={isPopular ? 'contained' : 'outlined'}
        color={isPopular ? 'primary' : 'inherit'}
        href={paths.marketing.contact}
        endIcon={<Iconify icon="solar:arrow-right-outline" />}
        sx={{
          mt: 'auto',
          ...(isPopular && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.primary.dark} 100%)`,
          }),
        }}
      >
        Paket wählen
      </Button>
    </Paper>
  );
}
