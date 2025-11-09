'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

// ----------------------------------------------------------------------

export default function AGBPage() {
  return (
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        {/* Header */}
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 900 }}>
          Allgemeine Geschäftsbedingungen (AGB)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Typography>

        <Alert severity="warning" sx={{ mb: 6 }}>
          Diese AGB gelten für alle Dienstleistungen von Gentle Webdesign. Mit der Beauftragung akzeptieren
          Sie diese Bedingungen.
        </Alert>

        <Divider sx={{ mb: 6 }} />

        {/* §1 Geltungsbereich */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §1 Geltungsbereich
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über Dienstleistungen im
            Bereich Webdesign, Softwareentwicklung, KI-Lösungen und Performance-Marketing, die zwischen
            Gentle Webdesign (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber")
            geschlossen werden.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des
            Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Auftragnehmer stimmt ihrer
            Geltung ausdrücklich schriftlich zu.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* §2 Vertragsabschluss */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §2 Vertragsabschluss
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Angebote des Auftragnehmers sind freibleibend und unverbindlich, soweit sie nicht
            ausdrücklich als verbindlich gekennzeichnet sind.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (2) Die Beauftragung durch den Auftraggeber stellt ein verbindliches Angebot dar. Der
            Auftragnehmer kann dieses Angebot innerhalb von 14 Tagen nach Zugang annehmen.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            (3) Der Vertragsabschluss erfolgt schriftlich, per E-Mail oder durch konkludentes Handeln
            (Beginn der Leistungserbringung).
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* §3 Leistungsumfang */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §3 Leistungsumfang
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Der Umfang der zu erbringenden Leistungen ergibt sich aus der Leistungsbeschreibung im
            jeweiligen Angebot bzw. Auftrag.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (2) Änderungswünsche des Auftraggebers nach Vertragsschluss werden gesondert vergütet, sofern
            sie nicht bereits im ursprünglichen Leistungsumfang enthalten sind.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (3) Der Auftragnehmer behält sich vor, Unterauftragnehmer mit der Leistungserbringung zu
            beauftragen.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* §4 Mitwirkungspflichten */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §4 Mitwirkungspflichten des Auftraggebers
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Der Auftraggeber ist verpflichtet, alle für die Leistungserbringung notwendigen
            Informationen, Materialien und Zugänge rechtzeitig und vollständig zur Verfügung zu stellen.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (2) Verzögerungen, die durch fehlende oder verspätete Mitwirkung des Auftraggebers entstehen,
            gehen nicht zu Lasten des Auftragnehmers.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            (3) Der Auftraggeber ist für die Sicherung eigener Daten selbst verantwortlich und verpflichtet
            sich, regelmäßige Backups anzufertigen.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* §5 Vergütung & Zahlung */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §5 Vergütung und Zahlungsbedingungen
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Die Vergütung richtet sich nach der im Angebot vereinbarten Preisvereinbarung.
            Alle Preise verstehen sich zzgl. der gesetzlichen Umsatzsteuer.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (2) Bei Projekten mit einer Laufzeit über 4 Wochen ist eine Anzahlung von 50% bei
            Vertragsschluss fällig. Die Restzahlung ist nach Abnahme der Leistung fällig.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (3) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig,
            sofern nicht anders vereinbart.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            (4) Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 9
            Prozentpunkten über dem Basiszinssatz zu verlangen.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* §6 Urheberrecht */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §6 Urheberrecht und Nutzungsrechte
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Alle Urheberrechte an den erstellten Werken verbleiben beim Auftragnehmer bis zur
            vollständigen Bezahlung der vereinbarten Vergütung.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (2) Nach vollständiger Bezahlung erhält der Auftraggeber ein einfaches, zeitlich und räumlich
            unbegrenztes Nutzungsrecht an den vertraglich geschuldeten Leistungen.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            (3) Der Auftragnehmer ist berechtigt, die erbrachten Leistungen zu Referenzzwecken zu nutzen
            und zu präsentieren, sofern keine abweichende Vereinbarung getroffen wurde.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* §7 Gewährleistung */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §7 Gewährleistung und Mängelhaftung
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Der Auftragnehmer gewährleistet, dass die erbrachten Leistungen zum Zeitpunkt der Abnahme
            frei von Sach- und Rechtsmängeln sind.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (2) Mängel sind vom Auftraggeber unverzüglich nach Feststellung schriftlich zu rügen.
            Der Auftragnehmer wird diese Mängel innerhalb angemessener Frist kostenlos beheben.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (3) Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme der Leistung.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* §8 Haftung */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §8 Haftung
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des
            Körpers oder der Gesundheit sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (2) Für leicht fahrlässige Pflichtverletzungen haftet der Auftragnehmer nur bei Verletzung
            vertragswesentlicher Pflichten. Die Haftung ist in diesem Fall auf den bei Vertragsschluss
            vorhersehbaren, typischerweise eintretenden Schaden begrenzt.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            (3) Die Haftung für Datenverlust wird auf den typischen Wiederherstellungsaufwand beschränkt,
            der bei regelmäßiger und sachgemäßer Anfertigung von Sicherungskopien eingetreten wäre.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* §9 Vertraulichkeit */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §9 Vertraulichkeit
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit bekannt gewordenen
            vertraulichen Informationen und Geschäftsgeheimnisse streng vertraulich zu behandeln.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            (2) Diese Verpflichtung gilt auch nach Beendigung des Vertragsverhältnisses für einen
            Zeitraum von 3 Jahren fort.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* §10 Kündigung */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §10 Kündigung und Rücktritt
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Beide Parteien können den Vertrag aus wichtigem Grund außerordentlich kündigen.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (2) Bei einer Kündigung durch den Auftraggeber sind bereits erbrachte Teilleistungen zu
            vergüten. Der Auftragnehmer ist darüber hinaus berechtigt, eine angemessene Entschädigung
            für entgangene Gewinne zu verlangen.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* §11 Schlussbestimmungen */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
            §11 Schlussbestimmungen
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            (2) Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist [IHR ORT], soweit gesetzlich
            zulässig.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit
            der übrigen Bestimmungen hiervon unberührt.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Footer Note */}
        <Box sx={{ p: 3, bgcolor: 'error.lighter', borderRadius: 2 }}>
          <Typography variant="caption" sx={{ color: 'error.darker', display: 'block', mb: 1 }}>
            <strong>⚠️ RECHTLICHER HINWEIS:</strong> Diese AGB sind ein allgemeines Template und müssen
            an Ihre spezifischen Geschäftsbedingungen angepasst werden!
          </Typography>
          <Typography variant="caption" sx={{ color: 'error.darker', display: 'block', mb: 1 }}>
            Ersetzen Sie alle Platzhalter in eckigen Klammern [BEISPIEL] durch Ihre tatsächlichen Daten.
          </Typography>
          <Typography variant="caption" sx={{ color: 'error.darker' }}>
            <strong>WICHTIG:</strong> Lassen Sie Ihre AGB von einem spezialisierten Rechtsanwalt prüfen,
            um rechtliche Sicherheit zu gewährleisten. Diese Vorlage ersetzt keine Rechtsberatung!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
