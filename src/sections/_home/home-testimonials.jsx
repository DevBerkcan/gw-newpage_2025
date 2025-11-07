import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
} from 'src/components/carousel';
import { ScrollReveal } from 'src/components/scroll-reveal';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Schmidt',
    role: 'CEO, TechVision GmbH',
    avatar: '/assets/images/avatar/avatar-1.webp',
    rating: 5,
    review:
      'Gentle Webdesign hat unsere E-Commerce-Plattform komplett transformiert. Die Conversion Rate ist um 165% gestiegen und die Ladezeiten sind jetzt unter 1 Sekunde. Absolut professionell!',
  },
  {
    id: '2',
    name: 'Michael Weber',
    role: 'Marketing Director, InnovateLab',
    avatar: '/assets/images/avatar/avatar-2.webp',
    rating: 5,
    review:
      'Die KI-Chatbot-Integration hat unseren Kundenservice revolutioniert. Wir sparen 40% der Support-Zeit und unsere Kunden sind begeistert von der schnellen Reaktionszeit.',
  },
  {
    id: '3',
    name: 'Anna Müller',
    role: 'Gründerin, DesignHub',
    avatar: '/assets/images/avatar/avatar-3.webp',
    rating: 5,
    review:
      'Von der ersten Idee bis zum Launch war das Team extrem professionell. Die moderne Web-App läuft perfekt und das Design ist genau, was wir uns vorgestellt haben.',
  },
  {
    id: '4',
    name: 'Thomas Bauer',
    role: 'CTO, DataFlow Systems',
    avatar: '/assets/images/avatar/avatar-4.webp',
    rating: 5,
    review:
      'Die SharePoint-Integration und die Azure-Implementierung waren erstklassig. Das Team kennt sich mit Microsoft-Technologien perfekt aus. Absolute Empfehlung!',
  },
  {
    id: '5',
    name: 'Laura Hoffmann',
    role: 'Geschäftsführerin, Fashion & Style',
    avatar: '/assets/images/avatar/avatar-5.webp',
    rating: 5,
    review:
      'Unser neuer Shopify-Store ist ein absoluter Hingucker. Die Performance ist unglaublich und die Conversion-Optimierung hat sich sofort ausgezahlt. Danke!',
  },
];

// ----------------------------------------------------------------------

export function HomeTestimonials({ sx, ...other }) {
  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2, md: 3 },
  });

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          py: { xs: 10, md: 15 },
          bgcolor: 'background.neutral',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <ScrollReveal variant="fadeInUp" delay={0.1}>
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled', mb: 2, display: 'block' }}>
              Kundenstimmen
            </Typography>

            <Typography variant="h2" sx={{ mb: 3 }}>
              Was unsere Kunden sagen
            </Typography>

            <Typography sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
              Über 50 erfolgreiche Projekte und begeisterte Kunden. Lesen Sie, was unsere Partner
              über die Zusammenarbeit mit uns sagen.
            </Typography>
          </Box>
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.2}>
          <Carousel carousel={carousel}>
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Carousel>
        </ScrollReveal>

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{ mt: 8, justifyContent: 'center' }}
        />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TestimonialCard({ testimonial }) {
  const { name, role, avatar, rating, review } = testimonial;

  return (
    <Box
      sx={(theme) => ({
        p: 4,
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: theme.vars.customShadows.card,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `-12px 12px 48px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
        },
      })}
    >
      {/* Rating */}
      <Rating
        value={rating}
        readOnly
        size="small"
        sx={{ mb: 2, color: 'warning.main' }}
      />

      {/* Review */}
      <Typography
        variant="body2"
        sx={{
          mb: 3,
          color: 'text.secondary',
          lineHeight: 1.8,
          minHeight: 120,
        }}
      >
        "{review}"
      </Typography>

      {/* Author */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          src={avatar}
          alt={name}
          sx={{ width: 48, height: 48 }}
        />

        <Box>
          <Typography variant="subtitle2">{name}</Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            {role}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
