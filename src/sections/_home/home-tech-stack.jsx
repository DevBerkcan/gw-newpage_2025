'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade } from 'src/components/animate';
import { Iconify } from 'src/components/iconify/iconify';

// ----------------------------------------------------------------------

const TECH_CATEGORIES = [
  {
    title: 'Frontend Development',
    color: '#00D8FF',
    technologies: [
      { name: 'Next.js', icon: 'skill-icons:nextjs-dark', description: 'React Framework' },
      { name: 'React', icon: 'skill-icons:react-dark', description: 'UI Library' },
      { name: 'TypeScript', icon: 'skill-icons:typescript', description: 'Type Safety' },
      { name: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark', description: 'Styling' },
    ],
  },
  {
    title: 'Backend & Cloud',
    color: '#0078D4',
    technologies: [
      { name: 'Node.js', icon: 'skill-icons:nodejs-dark', description: 'Runtime' },
      { name: 'Azure', icon: 'skill-icons:azure-dark', description: 'Cloud Platform' },
      { name: 'PostgreSQL', icon: 'skill-icons:postgresql-dark', description: 'Database' },
      { name: 'Docker', icon: 'skill-icons:docker', description: 'Containerization' },
    ],
  },
  {
    title: 'AI & Automation',
    color: '#00A67E',
    technologies: [
      { name: 'OpenAI GPT', icon: 'simple-icons:openai', description: 'AI Models' },
      { name: 'Python', icon: 'skill-icons:python-dark', description: 'ML Scripts' },
      { name: 'LangChain', icon: 'simple-icons:chainlink', description: 'LLM Framework' },
      { name: 'Azure AI', icon: 'simple-icons:microsoftazure', description: 'AI Services' },
    ],
  },
  {
    title: 'E-Commerce & CMS',
    color: '#95BF46',
    technologies: [
      { name: 'Shopify', icon: 'skill-icons:shopify', description: 'E-Commerce' },
      { name: 'WordPress', icon: 'skill-icons:wordpress', description: 'CMS' },
      { name: 'Strapi', icon: 'skill-icons:strapi-dark', description: 'Headless CMS' },
      { name: 'WooCommerce', icon: 'simple-icons:woocommerce', description: 'Shop Plugin' },
    ],
  },
];

// ----------------------------------------------------------------------

export function HomeTechStack() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorations */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '-10%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: '-10%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      <Container>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center' }}>
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
              Unsere Technologien
            </Typography>
          </m.div>

          <m.div
            variants={varFade('inUp', { distance: 40 })}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
          >
            <Typography variant="h2" sx={{ mb: 3 }}>
              Moderne Tech-Stacks für{' '}
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
                maximale Performance
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
              Wir arbeiten mit bewährten Enterprise-Technologien und innovativen Tools, um
              zukunftssichere digitale Lösungen zu entwickeln.
            </Typography>
          </m.div>
        </Box>

        {/* Tech Categories Grid */}
        <Box
          sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
          {TECH_CATEGORIES.map((category, categoryIndex) => (
            <TechCategory
              key={category.title}
              category={category}
              index={categoryIndex}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TechCategory({ category, index }) {
  const theme = useTheme();

  return (
    <m.div
      variants={varFade('inUp', { distance: 40 })}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Box
        sx={{
          p: 3,
          height: '100%',
          borderRadius: 2,
          bgcolor: 'background.paper',
          border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
          transition: (theme) =>
            theme.transitions.create(['transform', 'box-shadow', 'border-color'], {
              duration: theme.transitions.duration.standard,
            }),
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: (theme) => theme.customShadows.z20,
            borderColor: category.color,
          },
        }}
      >
        {/* Category Header */}
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              width: 48,
              height: 4,
              mb: 2,
              borderRadius: 1,
              bgcolor: category.color,
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {category.title}
          </Typography>
        </Box>

        {/* Technologies List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {category.technologies.map((tech) => (
            <TechItem key={tech.name} tech={tech} accentColor={category.color} />
          ))}
        </Box>
      </Box>
    </m.div>
  );
}

// ----------------------------------------------------------------------

function TechItem({ tech, accentColor }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        p: 1.5,
        borderRadius: 1.5,
        transition: (theme) =>
          theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.shorter,
          }),
        '&:hover': {
          bgcolor: (theme) => alpha(accentColor, 0.08),
          '& .tech-icon': {
            transform: 'scale(1.1) rotate(5deg)',
          },
        },
      }}
    >
      {/* Icon */}
      <Box
        className="tech-icon"
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          flexShrink: 0,
          borderRadius: 1,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: (theme) => alpha(accentColor, 0.12),
          transition: (theme) =>
            theme.transitions.create(['transform'], {
              duration: theme.transitions.duration.shorter,
            }),
        }}
      >
        <Iconify icon={tech.icon} width={28} sx={{ color: accentColor }} />
      </Box>

      {/* Text */}
      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {tech.name}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {tech.description}
        </Typography>
      </Box>
    </Box>
  );
}
