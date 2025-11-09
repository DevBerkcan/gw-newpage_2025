'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

// ----------------------------------------------------------------------

export default function DatenschutzPage() {
  return (
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        {/* Header */}
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 900 }}>
          Datenschutzerklärung
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Typography>

        <Alert severity="info" sx={{ mb: 6 }}>
          Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von
          personenbezogenen Daten innerhalb unseres Onlineangebotes auf.
        </Alert>

        <Divider sx={{ mb: 6 }} />

        {/* 1. Verantwortlicher */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            1. Verantwortlicher
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </Typography>

          <Box sx={{ pl: 3, borderLeft: (theme) => `3px solid ${theme.palette.primary.main}`, py: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Gentle Webdesign</strong>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Berk-Can Atesoglu
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              [IHRE STRASSE UND HAUSNUMMER]
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              [IHRE PLZ UND STADT]
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Telefon: +49 175 4701832
            </Typography>
            <Typography variant="body2">
              E-Mail: info@gentle-webdesign.de
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* 2. Erfassung allgemeiner Informationen */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            2. Erfassung allgemeiner Informationen
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen allgemeiner Natur erfasst.
            Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete
            Betriebssystem, den Domainnamen Ihres Internet Service Providers und Ähnliches.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person
            zulassen. Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von
            Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* 3. Cookies */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            3. Cookies
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
            gespeichert werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht
            sich die Benutzerfreundlichkeit und Sicherheit dieser Website.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Wir verwenden einen Cookie-Banner, der es Ihnen ermöglicht, Ihre Einwilligung zu optionalen Cookies
            zu geben oder zu verweigern. Sie können Ihre Cookie-Einstellungen jederzeit ändern.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            3.1 Notwendige Cookies
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Diese Cookies sind für den Betrieb der Seite unbedingt notwendig und ermöglichen beispielsweise
            sicherheitsrelevante Funktionalitäten. Diese Cookies werden ohne Ihre Einwilligung gesetzt.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            3.2 Analyse-Cookies
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Diese Cookies helfen uns, die Nutzung unserer Website zu analysieren und zu verstehen. Sie werden
            nur mit Ihrer Einwilligung gesetzt.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* 4. Google Tag Manager & Analytics */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            4. Google Tag Manager & Google Analytics
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Diese Website nutzt den Google Tag Manager. Dieser Dienst ermöglicht es uns, Website-Tags über eine
            Oberfläche zu verwalten. Der Google Tag Manager implementiert lediglich Tags. Das bedeutet: Es
            werden keine Cookies eingesetzt und es werden keine personenbezogenen Daten erfasst.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Über den Google Tag Manager wird Google Analytics eingebunden. Google Analytics verwendet Cookies,
            um die Nutzung der Website durch die Nutzer zu analysieren. Die durch das Cookie erzeugten
            Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in
            den USA übertragen und dort gespeichert.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            <strong>Rechtsgrundlage:</strong> Die Nutzung von Google Analytics erfolgt auf Grundlage Ihrer
            Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Google Tag Manager ID:</strong> GTM-NVTSGS3W
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* 5. Vercel Analytics */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            5. Vercel Analytics & Speed Insights
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Diese Website nutzt Vercel Analytics und Vercel Speed Insights zur Analyse der Webseitennutzung
            und zur Messung der Performance. Vercel Analytics ist ein datenschutzfreundlicher
            Analyse-Dienst, der:
          </Typography>

          <Box component="ul" sx={{ pl: 4, mb: 2 }}>
            <Typography component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              Keine Cookies setzt
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              Keine personenbezogenen Daten speichert
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              IP-Adressen anonymisiert
            </Typography>
            <Typography component="li" variant="body2" sx={{ color: 'text.secondary' }}>
              DSGVO-konform arbeitet
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage unseres berechtigten
            Interessens an der statistischen Analyse des Nutzerverhaltens (Art. 6 Abs. 1 lit. f DSGVO).
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Weitere Informationen: <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* 6. Formless.ai Chatbot */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            6. Formless.ai Chatbot
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Wir nutzen den Chatbot-Dienst von Formless.ai, um Ihnen einen interaktiven Support zu bieten.
            Wenn Sie den Chatbot nutzen, werden folgende Daten verarbeitet:
          </Typography>

          <Box component="ul" sx={{ pl: 4, mb: 2 }}>
            <Typography component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              Chat-Nachrichten und Konversationsdaten
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              Technische Daten (Browser, Betriebssystem)
            </Typography>
            <Typography component="li" variant="body2" sx={{ color: 'text.secondary' }}>
              Zeitstempel der Nutzung
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            <strong>Rechtsgrundlage:</strong> Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO) durch Interaktion mit dem Chatbot.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Conversation ID:</strong> FvZ04jODz1il
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Weitere Informationen: <a href="https://formless.ai/privacy" target="_blank" rel="noopener noreferrer">Formless.ai Privacy</a>
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* 7. Ihre Rechte */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            7. Ihre Rechte als betroffene Person
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Sie haben folgende Rechte:
          </Typography>

          <Box component="ul" sx={{ pl: 4, mb: 2 }}>
            <Typography component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre von
              uns verarbeiteten personenbezogenen Daten zu verlangen.
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              <strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung
              unrichtiger Daten zu verlangen.
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer Daten
              zu verlangen.
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              <strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung
              der Verarbeitung zu verlangen.
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung zu
              widersprechen.
            </Typography>
            <Typography component="li" variant="body2" sx={{ color: 'text.secondary' }}>
              <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in
              einem strukturierten Format zu erhalten.
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <strong>info@gentle-webdesign.de</strong>
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* 8. Widerruf der Einwilligung */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            8. Widerruf Ihrer Einwilligung
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Die
            Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt hiervon unberührt.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Den Widerruf können Sie über unsere Cookie-Einstellungen oder per E-Mail an
            <strong> info@gentle-webdesign.de</strong> vornehmen.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* 9. Beschwerde */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            9. Beschwerderecht bei der Aufsichtsbehörde
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
            Aufsichtsbehörde zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher
            oder gerichtlicher Rechtsbehelfe.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Die zuständige Datenschutzbehörde ist abhängig von Ihrem Wohnsitz. Eine Liste der
            Datenschutzbehörden finden Sie unter:{' '}
            <a
              href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              BfDI - Länderbehörden
            </a>
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* 10. SSL/TLS */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            10. SSL/TLS-Verschlüsselung
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
            SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
            des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Footer Note */}
        <Box sx={{ p: 3, bgcolor: 'warning.lighter', borderRadius: 2 }}>
          <Typography variant="caption" sx={{ color: 'warning.darker', display: 'block', mb: 1 }}>
            <strong>⚠️ WICHTIG:</strong> Diese Datenschutzerklärung ist ein Template und muss von Ihnen
            angepasst werden!
          </Typography>
          <Typography variant="caption" sx={{ color: 'warning.darker', display: 'block', mb: 1 }}>
            Ersetzen Sie alle Platzhalter in eckigen Klammern [BEISPIEL] durch Ihre tatsächlichen Daten und
            passen Sie die Inhalte an Ihre tatsächlichen Datenverarbeitungsvorgänge an.
          </Typography>
          <Typography variant="caption" sx={{ color: 'warning.darker' }}>
            Für rechtssichere Datenschutzerklärungen konsultieren Sie bitte einen spezialisierten
            Rechtsanwalt oder nutzen Sie Generatoren wie{' '}
            <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">
              e-recht24.de
            </a>.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
