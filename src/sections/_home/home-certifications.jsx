import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const CERTIFICATIONS = [
  {
    id: '1',
    name: 'Scrum Master',
    issuer: 'Scrum Alliance',
    icon: 'carbon:certificate-check',
    color: '#FF6B00',
    description: 'Professional Scrum Master Zertifizierung',
  },
  {
    id: '2',
    name: 'Product Owner',
    issuer: 'Scrum.org',
    icon: 'carbon:product',
    color: '#0066CC',
    description: 'Professional Scrum Product Owner',
  },
  {
    id: '3',
    name: 'Azure DevOps Expert',
    issuer: 'Microsoft',
    icon: 'devicon:azure',
    color: '#0078D4',
    description: 'AZ-400: Microsoft Azure DevOps Engineer',
  },
  {
    id: '4',
    name: 'Azure Developer',
    issuer: 'Microsoft',
    icon: 'devicon:azure',
    color: '#0078D4',
    description: 'AZ-204: Microsoft Azure Developer Associate',
  },
];

const variants = varFade('inUp', { distance: 24 });

// ----------------------------------------------------------------------

export function HomeCertifications({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          py: { xs: 5, md: 10 },
          bgcolor: theme.palette.mode === 'light' ? 'grey.100' : 'background.neutral',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        <m.div variants={variants}>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled', mb: 2, display: 'block' }}>
              Qualifikationen & Expertise
            </Typography>

            <Typography variant="h2" sx={{ mb: 3 }}>
              Professionelle Zertifizierungen
            </Typography>

            <Typography sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
              Unsere Expertise ist durch anerkannte Zertifizierungen in agilen Methoden und modernen Cloud-Technologien bestätigt.
            </Typography>
          </Box>
        </m.div>

        <Grid container spacing={3}>
          {CERTIFICATIONS.map((cert, index) => (
            <Grid key={cert.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <m.div variants={varFade('inUp', { distance: 24, delay: 0.1 * index })}>
                <CertificationCard certification={cert} />
              </m.div>
            </Grid>
          ))}
        </Grid>

        <m.div variants={variants}>
          <Box
            sx={{
              mt: 6,
              p: 3,
              borderRadius: 2,
              textAlign: 'center',
              border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              💡 Weitere Zertifizierungen und kontinuierliche Weiterbildung sind Teil unserer Unternehmenskultur
            </Typography>
          </Box>
        </m.div>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function CertificationCard({ certification }) {
  const { name, issuer, icon, color, description } = certification;

  return (
    <Card
      sx={{
        p: 4,
        height: 1,
        display: 'flex',
        textAlign: 'center',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      {/* Icon Badge */}
      <Box
        sx={{
          mb: 3,
          width: 80,
          height: 80,
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
          position: 'relative',
        }}
      >
        <Iconify icon={icon} width={40} sx={{ color }} />

        {/* Verified Badge */}
        <Box
          sx={{
            top: 0,
            right: 0,
            width: 24,
            height: 24,
            display: 'flex',
            position: 'absolute',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'success.main',
            border: (theme) => `solid 2px ${theme.palette.background.paper}`,
          }}
        >
          <Iconify icon="eva:checkmark-fill" width={14} sx={{ color: 'common.white' }} />
        </Box>
      </Box>

      {/* Content */}
      <Stack spacing={1}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
          {issuer}
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1 }}>
          {description}
        </Typography>
      </Stack>
    </Card>
  );
}
