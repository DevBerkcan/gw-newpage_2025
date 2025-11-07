import AutoScroll from 'embla-carousel-auto-scroll';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SvgColor } from 'src/components/svg-color';
import { Carousel, useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

export function ElearningOurClients({ brands, sx, ...other }) {
  const carousel = useCarousel({ loop: true, slidesToShow: 'auto', slideSpacing: '80px' }, [
    AutoScroll({ playOnInit: true, speed: 0.5 }),
  ]);

  return (
    <Box
      component="section"
      sx={[{ pt: 10, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 10 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', mb: 2, display: 'block' }}>
            Vertrauen Sie auf Expertise
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Unsere Technologie-Partner
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Wir setzen auf bewährte Technologien und arbeiten mit führenden Plattformen zusammen, um Ihnen die besten Lösungen zu bieten.
          </Typography>
        </Box>

        <Carousel carousel={carousel}>
          {brands.map((brand) => (
            <SvgColor
              key={brand.id}
              src={brand.image}
              sx={{ width: 106, height: 32, color: 'text.primary' }}
            />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
