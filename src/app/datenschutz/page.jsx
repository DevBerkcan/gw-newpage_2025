'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';

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

        {/* Allgemein */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Allgemein
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Als Betreiber dieser Webseite und als Unternehmen kommen wir mit Ihren personenbezogenen Daten in Kontakt.
            Gemeint sind alle Daten, die etwas über Sie aussagen und mit denen Sie identifiziert werden können. In dieser
            Datenschutzerklärung möchten wir Ihnen erläutern, in welcher Weise, zu welchem Zweck und auf welcher rechtlichen
            Grundlage wir Ihre Daten verarbeiten.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Für die Datenverarbeitung auf dieser Webseite und in unserem Unternehmen ist verantwortlich:
          </Typography>

          <Box sx={{ pl: 3, borderLeft: (theme) => `3px solid ${theme.palette.primary.main}`, py: 2, mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Berk-Can Atesoglu</strong>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Oberbilker Allee 319
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              40227 Düsseldorf
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Deutschland
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Telefon: 01754701892
            </Typography>
            <Typography variant="body2">
              E-Mail: office@gentle-webdesign.com
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Allgemeine Hinweise */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Allgemeine Hinweise
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            SSL- bzw. TLS-Verschlüsselung
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Wenn Sie Ihre Daten auf Webseiten eingeben, Online-Bestellungen aufgeben oder E-Mails über das Internet verschicken,
            müssen Sie immer damit rechnen, dass unberechtigte Dritte auf Ihre Daten zugreifen. Einen vollständigen Schutz vor
            solchen Zugriffen gibt es nicht. Wir setzen jedoch alles daran, Ihre Daten bestmöglich zu schützen und die
            Sicherheitslücken zu schließen, soweit es uns möglich ist.
          </Typography>

          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Ein wichtiger Schutzmechanismus ist die SSL- bzw. TLS-Verschlüsselung unserer Webseite, die dafür sorgt, dass Daten,
            die Sie an uns übermitteln, nicht von Dritten mitgelesen werden können. Sie erkennen die Verschlüsselung an dem
            Schloss-Icon vor der eingegebenen Internetadresse in Ihrem Browser und daran, dass unsere Internetadresse mit https://
            beginnt und nicht mit http://.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Wie lange speichern wir Ihre Daten?
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            An manchen Stellen in dieser Datenschutzerklärung informieren wir Sie darüber, wie lange wir oder die Unternehmen,
            die Ihre Daten in unserem Auftrag verarbeiten, Ihre Daten speichern. Fehlt eine solche Angabe, speichern wir Ihre
            Daten, bis der Zweck der Datenverarbeitung entfällt, Sie der Datenverarbeitung widersprechen oder Sie Ihre
            Einwilligung in die Datenverarbeitung widerrufen.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Im Falle eines Widerspruchs oder Widerrufs dürfen wir Ihre Daten allerdings weiterverarbeiten, wenn mindestens eine
            der folgenden Voraussetzungen vorliegt:
          </Typography>

          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Wir haben zwingende schutzwürdige Gründe für die Fortsetzung der Datenverarbeitung, die Ihre Interessen, Rechte
                und Freiheiten überwiegen (nur bei Widerspruch gegen die Datenverarbeitung; wenn sich der Widerspruch gegen
                Direktwerbung richtet, können wir keine schutzwürdigen Gründe vorbringen).
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Die Datenverarbeitung ist erforderlich, um Rechtsansprüche geltend zu machen, auszuüben oder zu verteidigen
                (gilt nicht, wenn sich Ihr Widerspruch gegen Direktwerbung richtet).
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Wir sind gesetzlich verpflichtet, Ihre Daten aufzubewahren.
              </Typography>
            </li>
          </Box>

          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            In diesem Fall löschen wir Ihre Daten, sobald die Voraussetzung(en) entfällt bzw. entfallen.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Datenweitergabe in die USA
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Wir nutzen auf unserer Webseite auch Tools von Unternehmen, die Ihre Daten in die USA übermitteln und dort speichern
            und ggf. weiterverarbeiten. Die Europäische Kommission hat einen Angemessenheitsbeschluss für den Datenschutzrahmen
            EU-USA angenommen. Dadurch wird festgestellt, dass die USA ein angemessenes Schutzniveau für personenbezogene Daten
            aus der EU gewährleisten, die an US-Unternehmen übermittelt werden.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Eine Liste aller zertifizierten Unternehmen können Sie unter folgendem Link einsehen:{' '}
            <Link
              href="https://www.dataprivacyframework.gov/s/participant-search"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.dataprivacyframework.gov/s/participant-search
            </Link>
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Ihre Rechte */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Ihre Rechte
          </Typography>

          <Alert severity="warning" sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
              WIDERSPRUCH GEGEN DIE DATENVERARBEITUNG
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              WENN SIE IN DIESER DATENSCHUTZERKLÄRUNG LESEN, DASS WIR BERECHTIGTE INTERESSEN FÜR DIE VERARBEITUNG IHRER DATEN
              HABEN UND DIESE DESHALB AUF ART. 6 ABS. 1 SATZ 1 LIT. F) DSGVO STÜTZEN, HABEN SIE NACH ART. 21 DSGVO DAS RECHT,
              WIDERSPRUCH DAGEGEN EINZULEGEN.
            </Typography>
          </Alert>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Viele Datenverarbeitungsvorgänge erfolgen auf der Grundlage Ihrer Einwilligung. Sie können Ihre Einwilligung
            jederzeit ohne Angabe von Gründen widerrufen (Art. 7 Abs. 3 DSGVO).
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Recht zur Beschwerde bei der zuständigen Aufsichtsbehörde
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Wenn Sie der Auffassung sind, dass wir gegen die Datenschutzgrundverordnung (DSGVO) verstoßen, haben Sie nach
            Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Recht auf Datenübertragbarkeit
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrages automatisiert verarbeiten, müssen
            wir Ihnen oder einem Dritten in einem gängigen maschinenlesbaren Format aushändigen, wenn Sie das verlangen.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Recht auf Datenauskunft, -löschung und -berichtigung
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Sie haben nach Art. 15 DSGVO das Recht, unentgeltlich Auskunft darüber zu erhalten, welche personenbezogenen Daten
            wir von Ihnen gespeichert haben. Sollten die Daten falsch sein, haben Sie ein Recht auf Berichtigung (Art. 16 DSGVO),
            unter den Voraussetzungen des Art. 17 DSGVO dürfen Sie verlangen, dass wir die Daten löschen.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Hosting und CDN */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Hosting und Content Delivery Networks (CDN)
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Externes Hosting
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Unsere Website liegt auf Servern der folgenden Anbieter:
          </Typography>

          <Box sx={{ pl: 3, borderLeft: (theme) => `3px solid ${theme.palette.primary.main}`, py: 2, mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723, USA
            </Typography>
            <Typography variant="body2">
              <strong>netcup GmbH</strong><br />
              Daimlerstraße 25<br />
              76185 Karlsruhe, Deutschland
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
            Wie verarbeiten wir Ihre Daten?
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Der Hoster speichert alle Daten unserer Webseite. Dazu gehören auch alle personenbezogenen Daten, die automatisch
            oder durch Ihre Eingabe erfasst werden. Das können insbesondere sein: Ihre IP-Adresse, aufgerufene Seiten, Namen,
            Kontaktdaten und -anfragen sowie Meta- und Kommunikationsdaten.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
            Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Da wir über unsere Webseite potenzielle Kunden ansprechen und Kontakte zu bestehenden Kunden pflegen, dient die
            Datenverarbeitung durch unseren Hoster der Vertragsanbahnung und -erfüllung und beruht daher auf Art. 6 Abs. 1 lit. b)
            DSGVO. Darüber hinaus ist es unser berechtigtes Interesse als Unternehmen, ein professionelles Internetangebot
            bereitzustellen. Insoweit verarbeiten wir Ihre Daten auf der Grundlage von Art. 6 Abs. 1 lit. f) DSGVO.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Cookies */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Verwendung von Cookies
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Unsere Webseite platziert Cookies auf Ihrem Gerät. Dabei handelt es sich um kleine Textdateien, mit denen
            unterschiedliche Zwecke verfolgt werden. Manche Cookies sind technisch notwendig, damit die Webseite überhaupt
            funktioniert (notwendige Cookies). Andere werden benötigt, um bestimmte Aktionen oder Funktionen auf der Site
            ausführen zu können (funktionale Cookies).
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
            Wie verarbeiten wir Ihre Daten?
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Session-Cookies werden nur für die Dauer einer Sitzung auf Ihrem Gerät gespeichert. Permanent-Cookies bleiben dagegen
            auf Ihrem Gerät, wenn Sie sie nicht selbst löschen. Sie können über die Einstellungen in Ihrem Browser Einfluss darauf
            nehmen, wie er mit Cookies umgeht.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
            Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Die Speicherung notwendiger und funktionaler Cookies erfolgt auf der Grundlage von Art. 6 Abs. 1 lit. f) DSGVO. Alle
            anderen Cookies setzen wir auf der Grundlage von Art. 6 Abs. 1 lit. a) DSGVO ein, sofern Sie uns eine entsprechende
            Einwilligung erteilen.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Server-Log-Dateien */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Server-Log-Dateien
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Server-Log-Dateien protokollieren alle Anfragen und Zugriffe auf unsere Webseite. Die Dateien enthalten folgende Daten:
          </Typography>

          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <li><Typography variant="body2" sx={{ color: 'text.secondary' }}>Browsertyp und -version</Typography></li>
            <li><Typography variant="body2" sx={{ color: 'text.secondary' }}>verwendetes Betriebssystem</Typography></li>
            <li><Typography variant="body2" sx={{ color: 'text.secondary' }}>Referrer-URL</Typography></li>
            <li><Typography variant="body2" sx={{ color: 'text.secondary' }}>Hostname des zugreifenden Rechners</Typography></li>
            <li><Typography variant="body2" sx={{ color: 'text.secondary' }}>Uhrzeit der Serveranfrage</Typography></li>
            <li><Typography variant="body2" sx={{ color: 'text.secondary' }}>IP-Adresse (ggf. anonymisiert)</Typography></li>
          </Box>

          <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
            Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Wir haben ein berechtigtes Interesse daran, dass unsere Webseite fehlerfrei läuft. Die Datenverarbeitung ist deshalb
            gemäß Art. 6 Abs. 1 lit. f) DSGVO rechtmäßig.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Kontaktformular */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Kontaktformular & Anfragen
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Sie können uns über das Kontaktformular auf dieser Webseite, per E-Mail, Telefon oder Telefax kontaktieren.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
            Wie verarbeiten wir Ihre Daten?
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Wir speichern Ihre Nachricht und die Angaben aus dem Formular, um Ihre Anfrage inklusive Anschlussfragen bearbeiten
            zu können. Ohne Ihre Einwilligung geben wir die Daten nicht an andere Personen weiter.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
            Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Sofern Ihre Anfrage mit unserer vertraglichen Beziehung in Zusammenhang steht oder der Durchführung vorvertraglicher
            Maßnahmen dient, verarbeiten wir Ihre Daten auf der Grundlage von Art. 6 Abs. 1 lit. b) DSGVO. In allen anderen Fällen
            ist Art. 6 Abs. 1 lit. f) DSGVO die Rechtsgrundlage.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Analyse-Tools */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Analyse-Tools und Werbung
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Google Tag Manager
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Wer verarbeitet Ihre Daten?</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Wie verarbeiten wir Ihre Daten?</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Wir setzen den Google Tag Manager ein (GTM-NVTSGS3W). Das Tool hilft uns, Trackingcodes und Conversionspixel in unsere
            Webseite einzubinden. Der Google Tag Manager erstellt selbst keine Nutzerprofile und platziert keine Cookies.
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Datenschutzinformationen:</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </Link>
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Vercel Analytics
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Wer verarbeitet Ihre Daten?</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Wie verarbeiten wir Ihre Daten?</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Wir nutzen Vercel Analytics zur Analyse des Nutzerverhaltens. Vercel Analytics ist DSGVO-konform und verwendet keine
            Cookies. Die Daten werden anonymisiert erfasst.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Formless.ai
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Was ist Formless.ai?</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            KI-gestützter Chatbot zur Beantwortung von Kundenanfragen (Conversation ID: FvZ04jODz1il)
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Wie verarbeiten wir Ihre Daten?</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Wenn Sie den Chatbot auf unserer Webseite nutzen, werden Ihre Nachrichten und ggf. angegebene Kontaktdaten verarbeitet,
            um Ihre Anfragen zu beantworten.
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f) DSGVO (berechtigtes Interesse an effizienter
            Kundenbetreuung) sowie Art. 6 Abs. 1 lit. a) DSGVO bei Einwilligung.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Social Media */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Social Media
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Wir unterhalten Profile in folgenden sozialen Netzwerken:
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Facebook
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
            <strong>Betreiber:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            <strong>Datenschutz:</strong>{' '}
            <Link href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">
              https://www.facebook.com/about/privacy/
            </Link>
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Instagram
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
            <strong>Betreiber:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            <strong>Datenschutz:</strong>{' '}
            <Link
              href="https://help.instagram.com/519522125107875"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://help.instagram.com/519522125107875
            </Link>
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            LinkedIn
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
            <strong>Betreiber:</strong> LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            <strong>Datenschutz:</strong>{' '}
            <Link
              href="https://de.linkedin.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://de.linkedin.com/legal/privacy-policy
            </Link>
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
            Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Unsere Profile in den sozialen Netzwerken sollen für eine möglichst umfassende Präsenz unseres Unternehmens im
            Internet sorgen. Daran haben wir als Unternehmen ein berechtigtes Interesse. Die Datenverarbeitung ist daher nach
            Art. 6 Abs. 1 lit. f DSGVO rechtmäßig.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Google Fonts */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Google Fonts (lokales Hosting)
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Wir setzen auf unserer Webseite Schriften des US-amerikanischen Unternehmens Google ein. Die Schriften haben wir lokal
            installiert, sodass keine Verbindung zu den Servern von Google stattfindet, wenn Sie unsere Website besuchen.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Weitere Informationen:{' '}
            <Link href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">
              https://developers.google.com/fonts/faq
            </Link>
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Footer Note */}
        <Box sx={{ p: 3, bgcolor: 'background.neutral', borderRadius: 2 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
            <strong>Letzte Aktualisierung:</strong> Diese Datenschutzerklärung wurde zuletzt am{' '}
            {new Date().toLocaleDateString('de-DE')} aktualisiert.
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten wenden Sie sich bitte an: office@gentle-webdesign.com
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
