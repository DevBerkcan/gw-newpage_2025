import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { CONFIG } from 'src/global-config';
import { paths } from 'src/routes/paths';

import { TrianglePattern } from 'src/assets/illustrations/components/shape-pattern';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: 'Wie lange dauert die Entwicklung einer individuellen Software-Lösung?',
    answer: (
      <Typography>
        Die Entwicklungszeit hängt stark vom Projektumfang ab. Kleinere Web-Anwendungen können in{' '}
        <strong>4-8 Wochen</strong> realisiert werden, während komplexere Enterprise-Lösungen mit
        KI-Integration <strong>3-6 Monate</strong> in Anspruch nehmen. Nach einem kostenlosen
        Erstgespräch erstellen wir eine detaillierte Zeitplanung für Ihr Projekt.
      </Typography>
    ),
  },
  {
    question: 'Welche Technologien nutzt Gentle Webdesign für die Entwicklung?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li>
          <strong>Frontend:</strong> React, Next.js, TypeScript, Material-UI
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Python, .NET Core
        </li>
        <li>
          <strong>Cloud & DevOps:</strong> Microsoft Azure, AWS, Docker, Kubernetes
        </li>
        <li>
          <strong>KI & Machine Learning:</strong> OpenAI API, TensorFlow, Azure AI Services
        </li>
        <li>
          <strong>Datenbanken:</strong> PostgreSQL, MongoDB, Azure SQL
        </li>
      </Box>
    ),
  },
  {
    question: 'Bietet ihr auch KI-Lösungen und Automatisierungen an?',
    answer: (
      <Typography>
        Ja, absolut! Wir entwickeln maßgeschneiderte KI-Lösungen, darunter:
        <Box component="ul" sx={{ pl: 3, mt: 1, listStyleType: 'disc' }}>
          <li>Chatbots und virtuelle Assistenten (GPT-4, Claude)</li>
          <li>Automatisierte Datenanalyse und Reporting</li>
          <li>Predictive Analytics und Machine Learning Modelle</li>
          <li>Workflow-Automatisierung mit KI-gestützter Entscheidungsfindung</li>
          <li>Integration von Azure OpenAI Services in bestehende Systeme</li>
        </Box>
      </Typography>
    ),
  },
  {
    question: 'Was kostet ein Software-Entwicklungsprojekt?',
    answer: (
      <Typography>
        Die Kosten variieren je nach Komplexität und Anforderungen:
        <Box component="ul" sx={{ pl: 3, mt: 1, listStyleType: 'disc' }}>
          <li>
            <strong>Kleine Websites/Landing Pages:</strong> ab €2.500
          </li>
          <li>
            <strong>Business-Websites mit CMS:</strong> €5.000 - €15.000
          </li>
          <li>
            <strong>Web-Anwendungen & Dashboards:</strong> €10.000 - €50.000
          </li>
          <li>
            <strong>Enterprise-Lösungen mit KI:</strong> ab €50.000
          </li>
        </Box>
        Nach einem Beratungsgespräch erstellen wir ein transparentes Festpreisangebot ohne versteckte Kosten.
      </Typography>
    ),
  },
  {
    question: 'Bietet ihr auch Online-Marketing und Google Ads Kampagnen an?',
    answer: (
      <Typography>
        Ja! Neben der Software-Entwicklung bieten wir umfassende Digital Marketing Services:
        <Box component="ul" sx={{ pl: 3, mt: 1, listStyleType: 'disc' }}>
          <li>
            <strong>Google Ads (SEA):</strong> Kampagnen-Setup, Optimierung und Monitoring
          </li>
          <li>
            <strong>Social Media Marketing:</strong> Facebook, Instagram, LinkedIn Kampagnen
          </li>
          <li>
            <strong>SEO:</strong> Suchmaschinenoptimierung für nachhaltige Rankings
          </li>
          <li>
            <strong>Content Marketing:</strong> Strategieentwicklung und Content-Erstellung
          </li>
          <li>
            <strong>Analytics & Tracking:</strong> Google Analytics 4, Tag Manager, Conversion-Tracking
          </li>
        </Box>
        Wir kombinieren technisches Know-how mit Marketing-Expertise für maximalen ROI.
      </Typography>
    ),
  },
  {
    question: 'Was ist in den Wartungsverträgen enthalten?',
    answer: (
      <Typography>
        Unsere Wartungsverträge stellen sicher, dass Ihre Software sicher, performant und
        up-to-date bleibt:
        <Box component="ul" sx={{ pl: 3, mt: 1, listStyleType: 'disc' }}>
          <li>Regelmäßige Security-Updates und Patches</li>
          <li>Performance-Monitoring und Optimierung</li>
          <li>Automatische Backups (täglich bis stündlich)</li>
          <li>Bug-Fixes und technischer Support</li>
          <li>Feature-Updates und kleinere Anpassungen</li>
          <li>24/7 Notfall-Hotline (ab Professional-Paket)</li>
        </Box>
        Mehr Details finden Sie in unseren{' '}
        <Link href="#pricing" sx={{ fontWeight: 600 }}>
          Wartungspaketen
        </Link>
        .
      </Typography>
    ),
  },
  {
    question: 'Wie läuft ein typisches Projekt bei euch ab?',
    answer: (
      <Typography>
        Wir arbeiten nach agilen Methoden (Scrum) mit transparenten Prozessen:
        <Box component="ul" sx={{ pl: 3, mt: 1, listStyleType: 'disc' }}>
          <li>
            <strong>1. Discovery Phase:</strong> Kostenloses Erstgespräch, Anforderungsanalyse
          </li>
          <li>
            <strong>2. Konzeption:</strong> Wireframes, Design-Entwürfe, technische Architektur
          </li>
          <li>
            <strong>3. Entwicklung:</strong> Agile Sprints mit regelmäßigen Reviews (alle 2 Wochen)
          </li>
          <li>
            <strong>4. Testing & QA:</strong> Umfangreiche Tests, User Acceptance Testing
          </li>
          <li>
            <strong>5. Launch:</strong> Deployment, Schulung, Go-Live Support
          </li>
          <li>
            <strong>6. Support:</strong> Wartung, Updates, kontinuierliche Optimierung
          </li>
        </Box>
        Sie erhalten während des gesamten Projekts vollen Zugriff auf unser Azure DevOps Board.
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

const variants = varFade('inUp', { distance: 24 });

// ----------------------------------------------------------------------

export function HomeFAQs({ sx, ...other }) {
  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  const renderList = () => (
    <Box sx={{ my: { xs: 5, md: 10 } }}>
      {FAQs.map((faq) => (
        <Accordion
          key={faq.question}
          expanded={expanded === faq.question}
          onChange={handleChangeExpanded(faq.question)}
        >
          <AccordionSummary>
            <Typography variant="h6" sx={{ pr: 1, flexGrow: 1 }}>
              {faq.question}
            </Typography>

            <Iconify
              icon={expanded === faq.question ? 'eva:minus-outline' : 'eva:plus-outline'}
              sx={{ transform: 'translateY(4px)' }}
            />
          </AccordionSummary>

          <AccordionDetails sx={{ color: 'text.secondary' }}>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[{ position: 'relative', py: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ md: 3 }} sx={{ justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <m.div variants={variants}>
              <Typography variant="overline" sx={{ color: 'text.disabled', textAlign: 'center', display: 'block', mb: 2 }}>
                Häufig gestellte Fragen
              </Typography>
            </m.div>

            <m.div variants={variants}>
              <Typography variant="h2" sx={{ textAlign: 'center' }}>
                Alles, was Sie wissen müssen
              </Typography>
            </m.div>

            <m.div variants={variants}>{renderList()}</m.div>
          </Grid>
        </Grid>

        {/* Still Have Questions CTA */}
        <Box
          sx={{
            mt: 10,
            overflow: 'hidden',
            position: 'relative',
            bgcolor: 'common.black',
            borderRadius: 3,
            py: { xs: 8, md: 10 },
          }}
        >
          {/* Rotating Background Texture */}
          <Box
            sx={{
              top: 0,
              right: 0,
              bottom: 0,
              my: 'auto',
              width: 600,
              height: 600,
              opacity: 0.24,
              position: 'absolute',
              transform: 'translateX(30%)',
            }}
          >
            <Box
              component={m.img}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
              alt="Texture"
              loading="lazy"
              src={`${CONFIG.assetsDir}/assets/background/texture-3.webp`}
            />
          </Box>

          <Box sx={{ position: 'relative', mx: 'auto', maxWidth: 640, textAlign: 'center', color: 'common.white', px: 3 }}>
            <m.div variants={variants}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Still Have Questions?
              </Typography>
            </m.div>

            <m.div variants={variants}>
              <Typography sx={{ mb: 5, opacity: 0.72, fontSize: '1.1rem' }}>
                Please describe your case to receive the most accurate advice.
                <br />
                Our team is ready to help you find the perfect solution.
              </Typography>
            </m.div>

            <m.div variants={variants}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                href={paths.marketing.contact}
                endIcon={<Iconify icon="solar:arrow-right-outline" />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.primary.dark} 100%)`,
                }}
              >
                Contact Us Now
              </Button>
            </m.div>
          </Box>
        </Box>

        <TrianglePattern
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            width: 600,
            height: 600,
            maxWidth: 1,
          }}
        />
      </Container>
    </Box>
  );
}
