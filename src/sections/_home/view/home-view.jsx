'use client';

import { useBackToTop } from 'minimal-shared/hooks';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import { _pricingHome, _brands, _members, _caseStudies } from 'src/_mock';

import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';
import { LogoIntro } from 'src/components/logo-intro';

import { HomeHero } from '../home-hero';
import { HomeFAQs } from '../home-faqs';
import { HomePricing } from '../home-pricing';
import { HomeNewStart } from '../home-new-start';
import { HomeMinimalUI } from '../home-combination';
import { HomeForDesigner } from '../home-for-designer';
import { HomeAdvertisement } from '../home-advertisement';
import { ElearningOurClients } from 'src/sections/_elearning/elearning-our-clients';
import { MarketingLandingServices } from 'src/sections/_marketing/landing/marketing-landing-services';
import { MarketingLandingProcess } from 'src/sections/_marketing/landing/marketing-landing-process';
import { MarketingLandingCaseStudies } from 'src/sections/_marketing/landing/marketing-landing-case-studies';
import { MarketingTeam } from 'src/sections/_marketing/marketing-team';
import { HomeFlexibleComponents } from '../home-flexible-components';
import { HomeContactCTA } from '../home-contact-cta';
import { HomeTestimonials } from '../home-testimonials';
import { HomeCertifications } from '../home-certifications';



export function HomeView() {
  const pageProgress = useScrollProgress();

  const { onBackToTop, isVisible } = useBackToTop('90%');
const _members = [
  {
    id: '1',
    name: 'Berk-Can Atesoglu',
    role: 'CEO & Full-Stack Developer',
    photoUrl: '/assets/images/team/team-1.jpg'
  },
  {
    id: '2',
    name: 'Medin Turkes',
    role: 'Team Lead & UX Designer',
    photoUrl: '/assets/images/team/team-2.jpg'
  },
];
  return (
    <>
      <LogoIntro />

      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTopButton isVisible={isVisible} onClick={onBackToTop} />

      <HomeHero />
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <ElearningOurClients brands={_brands} />
        <HomeCertifications />
        <MarketingLandingServices />
        <MarketingLandingProcess />
        <MarketingLandingCaseStudies caseStudies={_caseStudies} />
        <MarketingTeam members={_members} />
        <HomeTestimonials />
        <HomePricing />
        <HomeFAQs />
      </Box>
    </>
  );
}

function BackToTopButton({ isVisible, sx, ...other }) {
  return (
    <Fab
      aria-label="Back to top"
      sx={[
        (theme) => ({
          width: 48,
          height: 48,
          position: 'fixed',
          transform: 'scale(0)',
          right: { xs: 24, md: 32 },
          bottom: { xs: 24, md: 32 },
          zIndex: theme.zIndex.speedDial,
          transition: theme.transitions.create(['transform']),
          ...(isVisible && { transform: 'scale(1)' }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <SvgIcon>
        {/* https://icon-sets.iconify.design/solar/double-alt-arrow-up-bold-duotone/ */}
        <path
          fill="currentColor"
          d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z"
          opacity="0.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057"
          clipRule="evenodd"
        />
      </SvgIcon>
    </Fab>
  );
}