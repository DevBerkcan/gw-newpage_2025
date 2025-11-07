import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';
import { ScrollReveal } from 'src/components/scroll-reveal';

// ----------------------------------------------------------------------

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/solid-64/${name}`;

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const STEPS = [
  { name: 'Kickoff & Konzept', icon: iconPath('ic-sketch.svg'), description: 'Anforderungen, Ziele & erste Wireframes' },
  { name: 'Design & Prototyping', icon: iconPath('ic-research.svg'), description: 'UI/UX-Design und interaktive Prototypen' },
  { name: 'Entwicklung & Tests', icon: iconPath('ic-system-optimization.svg'), description: 'Agile Entwicklung mit CI/CD & QA' },
  { name: 'Go-Live & Support', icon: iconPath('ic-report-results.svg'), description: 'Launch, Schulung und Weiterentwicklung' },
];

// ----------------------------------------------------------------------

export function MarketingLandingProcess({ sx, ...other }) {
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
            Unser Prozess
          </Typography>

          <Typography variant="h2">Wie wir arbeiten</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Transparenz und Effizienz: In kurzen Sprints entwickeln wir Ihre Lösung – iterativ, messbar und mit kontinuierlichem Feedback.
          </Typography>
        </Stack>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },

            alignItems: 'flex-end',
          }}
        >
          {STEPS.map((item, index) => (
            <ScrollReveal key={item.name} variant="fadeInUp" delay={index * 0.15}>
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
    <Card
      sx={(theme) => ({
        p: 3,
        color: theme.vars.palette[COLORS[index]].darker,
        bgcolor: theme.vars.palette[COLORS[index]].light,
        boxShadow: `-8px 12px 32px 0px ${varAlpha(theme.vars.palette[COLORS[index]].mainChannel, 0.2)}`,
        ...(index > 0 && { mb: { md: index * 2.5 } }),
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `-12px 16px 48px 0px ${varAlpha(theme.vars.palette[COLORS[index]].mainChannel, 0.3)}`,
        },
      })}
    >
      <SvgColor src={item.icon} sx={{ width: 64, height: 64, opacity: 0.48 }} />

      <Typography component="h6" variant="h5" sx={{ mt: 3, mb: 1 }}>
        {item.name}
      </Typography>

      {item.description && (
        <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.875rem' }}>
          {item.description}
        </Typography>
      )}
    </Card>
  );
}
