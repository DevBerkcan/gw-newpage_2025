'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// ----------------------------------------------------------------------

export default function ImpressumPage() {
  return (
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {/* Header */}
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 900 }}>
          Impressum
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, color: 'text.secondary' }}>
          Angaben gemäß § 5 TMG
        </Typography>

        <Divider sx={{ mb: 6 }} />

        {/* Company Information */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            Anbieter
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Gentle Webdesign</strong>
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Berk-Can Atesoglu
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
            [IHRE STRASSE UND HAUSNUMMER]
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
            [IHRE PLZ UND STADT]
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
            Deutschland
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Contact Information */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            Kontakt
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Telefon:</strong> +49 175 4701832
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>E-Mail:</strong> info@gentle-webdesign.de
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Website:</strong> www.gentle-webdesign.de
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Business Registration */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            Registereintrag
          </Typography>

          <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
            <strong>Handelsregister:</strong> [IHR HANDELSREGISTER-NUMMER, falls vorhanden]
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
            <strong>Registergericht:</strong> [IHR REGISTERGERICHT, falls vorhanden]
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
            <strong>USt-IdNr.:</strong> [IHRE UMSATZSTEUER-ID, falls vorhanden]
          </Typography>

          <Typography variant="caption" sx={{ display: 'block', mt: 2, fontStyle: 'italic' }}>
            * Falls Sie als Einzelunternehmer/Freiberufler tätig sind und keine Handelsregisternummer haben,
            können Sie diesen Abschnitt entsprechend anpassen.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Responsible for Content */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            Berk-Can Atesoglu
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
            [IHRE STRASSE UND HAUSNUMMER]
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            [IHRE PLZ UND STADT]
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* EU Dispute Resolution */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            EU-Streitschlichtung
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </strong>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Consumer Dispute Resolution */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Liability Notice */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            Haftungsausschluss
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Haftung für Inhalte
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Haftung für Links
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Urheberrecht
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Footer Note */}
        <Box sx={{ p: 3, bgcolor: 'background.neutral', borderRadius: 2 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
            <strong>Hinweis:</strong> Dieses Impressum ist ein Template. Bitte ersetzen Sie alle Platzhalter
            in eckigen Klammern [BEISPIEL] durch Ihre tatsächlichen Daten.
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Bei Fragen zur korrekten Gestaltung Ihres Impressums konsultieren Sie bitte einen Rechtsanwalt.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
