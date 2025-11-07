import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { ScrollReveal } from 'src/components/scroll-reveal';

// ----------------------------------------------------------------------

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/duotone/${name}`;

const COLORS = ['primary', 'secondary', 'success', 'warning'];

const SERVICES = [
  {
    name: 'Webdesign & Entwicklung',
    icon: iconPath('ic-web-programming.svg'),
    content: 'Moderne, performante Websites mit Next.js, React und erstklassiger UX/UI - DSGVO-konform und SEO-optimiert.',
    path: paths.marketing.services,
  },
  {
    name: 'KI-Lösungen & Automation',
    icon: iconPath('ic-ai.svg'),
    content: 'Intelligente Chatbots, RAG-Systeme und Prozessautomatisierungen, die Ihre Workflows revolutionieren.',
    path: paths.marketing.services,
  },
  {
    name: 'E-Commerce & Shopify',
    icon: iconPath('ic-ecommerce.svg'),
    content: 'Hochkonvertierende Online-Shops mit Shopify oder Headless Commerce für maximale Performance.',
    path: paths.marketing.services,
  },
  {
    name: 'Branding & Design',
    icon: iconPath('ic-design.svg'),
    content: 'Corporate Identity, Logos und Brand Guides mit Wiedererkennungswert - konsistent über alle Kanäle.',
    path: paths.marketing.services,
  },
];

// ----------------------------------------------------------------------

export function MarketingLandingServices({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[{ py: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            mb: 5,
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Unsere Leistungen
          </Typography>

          <Typography variant="h2">Was wir für Sie tun</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Von der ersten Idee bis zum erfolgreichen Launch - wir begleiten Sie mit modernster Technologie und kreativen Lösungen, die Ihre Zielgruppe begeistern.
          </Typography>
        </Stack>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {SERVICES.map((item, index) => (
            <ScrollReveal key={item.name} variant="fadeInUp" delay={index * 0.1}>
              <ServiceItem item={item} index={index} />
            </ScrollReveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function ServiceItem({ item, index }) {
  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        px: 4,
        py: 5,
        borderRadius: 2,
        textAlign: 'center',
        bgcolor: 'transparent',
        boxShadow: theme.vars.customShadows.card,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-12px) scale(1.02)',
          boxShadow: `-24px 32px 80px -8px ${varAlpha(theme.vars.palette[COLORS[index]].mainChannel, 0.28)}`,
        },
        [theme.breakpoints.up('md')]: {
          boxShadow: 'none',
          ...(index === 1 && { py: 8 }),
          ...(index === 2 && { py: 10 }),
          ...([2, 3].includes(index) && {
            boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
            ...theme.applyStyles('dark', {
              boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
            }),
          }),
        },
      })}
    >
      <SvgColor
        src={item.icon}
        sx={(theme) => ({
          background: `linear-gradient(to bottom, ${theme.vars.palette[COLORS[index]].light}, ${theme.vars.palette[COLORS[index]].main})`,
          width: 88,
          height: 88,
        })}
      />

      <Box sx={{ my: 5 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.content}
        </Typography>
      </Box>

      <IconButton
        component={RouterLink}
        href={item.path}
        color={
          (index === 0 && 'primary') ||
          (index === 1 && 'secondary') ||
          (index === 2 && 'success') ||
          'warning'
        }
      >
        <Iconify icon="carbon:direction-straight-right" />
      </IconButton>
    </Paper>
  );
}
