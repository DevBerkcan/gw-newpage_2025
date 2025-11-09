'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade } from 'src/components/animate';
import { Iconify } from 'src/components/iconify/iconify';
import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Next.js 14 App Router: Der ultimative Performance-Guide',
    excerpt:
      'Lernen Sie, wie Sie mit dem neuen App Router von Next.js 14 blitzschnelle Web-Apps entwickeln. Mit Server Components, Streaming und mehr.',
    coverUrl: '/assets/images/blog/blog-1.jpg',
    category: 'Web Development',
    categoryColor: 'primary',
    author: {
      name: 'Berk-Can Atesoglu',
      avatar: '/assets/images/team/team-1.jpg',
    },
    publishDate: '15. März 2024',
    readTime: '8 min',
  },
  {
    id: '2',
    title: 'KI-gestützte Automatisierung: Von der Theorie zur Praxis',
    excerpt:
      'Praktische Anleitung zur Integration von OpenAI GPT-4 und Azure AI Services in Ihre Business-Prozesse. Mit konkreten Use Cases.',
    coverUrl: '/assets/images/blog/blog-2.jpg',
    category: 'AI & Automation',
    categoryColor: 'success',
    author: {
      name: 'Medin Turkes',
      avatar: '/assets/images/team/team-2.jpg',
    },
    publishDate: '10. März 2024',
    readTime: '12 min',
  },
  {
    id: '3',
    title: 'Shopify Headless Commerce mit Next.js: Ein Deep Dive',
    excerpt:
      'Moderne E-Commerce-Architektur mit Shopify Storefront API und Next.js. Performance-Optimierung, SEO und beste Practices.',
    coverUrl: '/assets/images/blog/blog-3.jpg',
    category: 'E-Commerce',
    categoryColor: 'info',
    author: {
      name: 'Berk-Can Atesoglu',
      avatar: '/assets/images/team/team-1.jpg',
    },
    publishDate: '5. März 2024',
    readTime: '10 min',
  },
];

// ----------------------------------------------------------------------

export function HomeBlogPreview() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: 'background.default',
      }}
    >
      <Container>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <m.div
                variants={varFade('inUp', { distance: 40 })}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    mb: 2,
                    display: 'block',
                  }}
                >
                  Insights & Wissen
                </Typography>
              </m.div>

              <m.div
                variants={varFade('inUp', { distance: 40 })}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 }}
              >
                <Typography variant="h2" sx={{ mb: 2 }}>
                  Neueste Artikel & Tutorials
                </Typography>
              </m.div>

              <m.div
                variants={varFade('inUp', { distance: 40 })}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Praktisches Wissen zu Web-Development, KI und digitalen Trends
                </Typography>
              </m.div>
            </Box>

            <m.div
              variants={varFade('inUp', { distance: 40 })}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="outlined"
                size="large"
                endIcon={<Iconify icon="solar:arrow-right-outline" width={20} />}
                sx={{
                  minWidth: 200,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                  },
                }}
              >
                Alle Artikel
              </Button>
            </m.div>
          </Box>
        </Box>

        {/* Blog Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
          }}
        >
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function BlogCard({ post, index }) {
  const theme = useTheme();

  return (
    <m.div
      variants={varFade('inUp', { distance: 40 })}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
          transition: (theme) =>
            theme.transitions.create(['transform', 'box-shadow'], {
              duration: theme.transitions.duration.standard,
            }),
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: (theme) => theme.customShadows.z24,
            '& .blog-image': {
              transform: 'scale(1.1)',
            },
          },
        }}
      >
        {/* Cover Image */}
        <Box
          sx={{
            position: 'relative',
            paddingTop: '60%',
            overflow: 'hidden',
            bgcolor: 'grey.200',
          }}
        >
          {/* Placeholder gradient if no image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: (theme) =>
                `linear-gradient(135deg, ${alpha(theme.palette[post.categoryColor].light, 0.8)} 0%, ${alpha(theme.palette[post.categoryColor].dark, 0.8)} 100%)`,
            }}
          />

          {/* Category Badge */}
          <Chip
            label={post.category}
            size="small"
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              zIndex: 2,
              bgcolor: `${post.categoryColor}.main`,
              color: 'common.white',
              fontWeight: 700,
              fontSize: '0.75rem',
            }}
          />
        </Box>

        {/* Content */}
        <CardContent
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            p: 3,
          }}
        >
          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 700,
              lineHeight: 1.4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {post.title}
          </Typography>

          {/* Excerpt */}
          <Typography
            variant="body2"
            sx={{
              mb: 3,
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              flex: 1,
            }}
          >
            {post.excerpt}
          </Typography>

          {/* Footer */}
          <Box
            sx={{
              pt: 2,
              borderTop: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            {/* Author */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
              <Avatar
                src={post.author.avatar}
                alt={post.author.name}
                sx={{
                  width: 32,
                  height: 32,
                  flexShrink: 0,
                }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600,
                    display: 'block',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {post.author.name}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                  {post.publishDate}
                </Typography>
              </Box>
            </Box>

            {/* Read Time */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                flexShrink: 0,
              }}
            >
              <Iconify icon="solar:clock-circle-outline" width={16} sx={{ color: 'text.secondary' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {post.readTime}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </m.div>
  );
}
