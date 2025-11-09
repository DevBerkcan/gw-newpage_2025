'use client';

import { m } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade } from 'src/components/animate';
import { Iconify } from 'src/components/iconify/iconify';

// ----------------------------------------------------------------------

export function HomeNewsletter() {
  const theme = useTheme();
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Replace with actual API call
      console.log('Newsletter subscription:', data);

      setSubmitStatus('success');
      reset();

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        background: (theme) =>
          `linear-gradient(135deg, ${alpha(theme.palette.primary.darker, 0.95)} 0%, ${alpha(theme.palette.secondary.darker, 0.95)} 100%)`,
      }}
    >
      {/* Animated Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${theme.palette.common.white} 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, ${theme.palette.common.white} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px',
          animation: 'float 20s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            maxWidth: 720,
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          {/* Icon */}
          <m.div
            variants={varFade('inDown', { distance: 40 })}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                mx: 'auto',
                mb: 4,
                display: 'flex',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: (theme) => alpha(theme.palette.common.white, 0.16),
                backdropFilter: 'blur(10px)',
                border: (theme) => `2px solid ${alpha(theme.palette.common.white, 0.24)}`,
              }}
            >
              <Iconify
                icon="solar:letter-unread-bold-duotone"
                width={40}
                sx={{ color: 'common.white' }}
              />
            </Box>
          </m.div>

          {/* Heading */}
          <m.div
            variants={varFade('inUp', { distance: 40 })}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: 'common.white',
                fontWeight: 900,
              }}
            >
              Bleiben Sie auf dem Laufenden
            </Typography>
          </m.div>

          {/* Description */}
          <m.div
            variants={varFade('inUp', { distance: 40 })}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                color: (theme) => alpha(theme.palette.common.white, 0.8),
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}
            >
              Erhalten Sie exklusive Einblicke, Tipps zu Web-Development & KI, sowie
              Erfolgsgeschichten direkt in Ihr Postfach. Kostenlos, keine Spam-Garantie.
            </Typography>
          </m.div>

          {/* Newsletter Form */}
          <m.div
            variants={varFade('inUp', { distance: 40 })}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3 }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                mb: 3,
              }}
            >
              <TextField
                fullWidth
                placeholder="Ihre E-Mail Adresse"
                {...register('email', {
                  required: 'E-Mail ist erforderlich',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Ungültige E-Mail Adresse',
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="solar:letter-outline" width={24} sx={{ color: 'grey.500' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  bgcolor: 'common.white',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                sx={{
                  minWidth: { xs: '100%', sm: 180 },
                  height: 56,
                  px: 4,
                  fontSize: '1rem',
                  fontWeight: 700,
                  bgcolor: 'common.white',
                  color: 'primary.darker',
                  boxShadow: (theme) => theme.customShadows.z8,
                  '&:hover': {
                    bgcolor: (theme) => alpha(theme.palette.common.white, 0.9),
                    boxShadow: (theme) => theme.customShadows.z16,
                  },
                }}
                startIcon={
                  isSubmitting ? (
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        border: (theme) => `3px solid ${alpha(theme.palette.primary.main, 0.24)}`,
                        borderTopColor: 'primary.main',
                        animation: 'spin 1s linear infinite',
                        '@keyframes spin': {
                          '0%': { transform: 'rotate(0deg)' },
                          '100%': { transform: 'rotate(360deg)' },
                        },
                      }}
                    />
                  ) : (
                    <Iconify icon="solar:arrow-right-outline" width={24} />
                  )
                }
              >
                {isSubmitting ? 'Wird gesendet...' : 'Anmelden'}
              </Button>
            </Box>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <Alert
                severity="success"
                icon={<Iconify icon="solar:check-circle-bold" width={24} />}
                sx={{
                  bgcolor: (theme) => alpha(theme.palette.success.main, 0.16),
                  color: 'common.white',
                  '& .MuiAlert-icon': {
                    color: 'success.light',
                  },
                }}
              >
                Vielen Dank für Ihre Anmeldung! Bitte bestätigen Sie Ihre E-Mail.
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert
                severity="error"
                icon={<Iconify icon="solar:danger-circle-bold" width={24} />}
                sx={{
                  bgcolor: (theme) => alpha(theme.palette.error.main, 0.16),
                  color: 'common.white',
                  '& .MuiAlert-icon': {
                    color: 'error.light',
                  },
                }}
              >
                Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.
              </Alert>
            )}
          </m.div>

          {/* Privacy Note */}
          <m.div
            variants={varFade('inUp', { distance: 40 })}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                flexWrap: 'wrap',
              }}
            >
              <Iconify
                icon="solar:shield-check-outline"
                width={20}
                sx={{ color: (theme) => alpha(theme.palette.common.white, 0.6) }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: (theme) => alpha(theme.palette.common.white, 0.6),
                }}
              >
                Ihre Daten sind bei uns sicher. Jederzeit abmeldbar. DSGVO-konform.
              </Typography>
            </Box>
          </m.div>

          {/* Social Proof */}
          <m.div
            variants={varFade('inUp', { distance: 40 })}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5 }}
          >
            <Box
              sx={{
                mt: 6,
                pt: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                borderTop: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.16)}`,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', ml: -1 }}>
                {[...Array(5)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      border: (theme) => `2px solid ${theme.palette.primary.darker}`,
                      bgcolor: 'grey.600',
                      ml: -1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Iconify icon="solar:user-bold" width={16} sx={{ color: 'common.white' }} />
                  </Box>
                ))}
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: (theme) => alpha(theme.palette.common.white, 0.8),
                  fontWeight: 600,
                }}
              >
                Bereits <strong>500+</strong> Abonnenten
              </Typography>
            </Box>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
