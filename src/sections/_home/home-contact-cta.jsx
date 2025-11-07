import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#0a0a0a',
  padding: theme.spacing(15, 0),
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(20, 0),
  },
}));

const HalftonePattern = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  pointerEvents: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '600px',
    height: '600px',
    left: '-100px',
    bottom: '-100px',
    background: 'radial-gradient(circle, #8B1874 0%, #C2185B 50%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.6,
    animation: 'pulse 8s ease-in-out infinite',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '500px',
    height: '500px',
    right: '-50px',
    top: '-50px',
    background: 'radial-gradient(circle, #1A237E 0%, #512DA8 50%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.4,
    animation: 'pulse 6s ease-in-out infinite',
    animationDelay: '1s',
  },
  '@keyframes pulse': {
    '0%, 100%': {
      transform: 'scale(1)',
      opacity: 0.6,
    },
    '50%': {
      transform: 'scale(1.1)',
      opacity: 0.8,
    },
  },
});

const DotPattern = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  backgroundImage: `
    radial-gradient(circle, rgba(255,255,255,0.08) 2px, transparent 2px),
    radial-gradient(circle, rgba(0,255,169,0.03) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px, 20px 20px',
  backgroundPosition: '0 0, 20px 20px',
  pointerEvents: 'none',
  animation: 'moveDots 20s linear infinite',
  '@keyframes moveDots': {
    '0%': {
      backgroundPosition: '0 0, 20px 20px',
    },
    '100%': {
      backgroundPosition: '40px 40px, 60px 60px',
    },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  padding: '14px 32px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 500,
  border: 'none',
  borderRadius: '50px',
  transition: 'all 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, #FF6B35 0%, #F7931E 100%)',
    borderRadius: '2px',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
    '&::after': {
      width: '80px',
    },
  },
}));

// ----------------------------------------------------------------------

export function HomeContactCTA({ sx, ...other }) {
  return (
    <StyledRoot sx={sx} {...other}>
      <HalftonePattern />
      <DotPattern />

      <Container
        component={MotionViewport}
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          <m.div variants={varFade('inUp')}>
            <Typography
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                letterSpacing: '-0.02em',
              }}
            >
              <Box
                component="span"
                sx={{
                  color: '#ffffff',
                }}
              >
                Still Have{' '}
              </Box>
              <Box
                component="span"
                sx={{
                  color: '#00ffa9',
                  position: 'relative',
                  '&::after': {
                    content: '"?"',
                    position: 'absolute',
                    color: '#00ffa9',
                  },
                }}
              >
                Questions?
              </Box>
            </Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: 'rgba(255, 255, 255, 0.6)',
                mb: 6,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Beschreiben Sie Ihr Projekt, um die präziseste Beratung zu erhalten.
            </Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <StyledButton
              component={RouterLink}
              href={paths.marketing.contact}
              size="large"
            >
              Contact Us
            </StyledButton>
          </m.div>
        </Box>
      </Container>
    </StyledRoot>
  );
}
