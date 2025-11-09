// components/schema/service-ld.jsx

export function ServiceLD() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development, Software Development, AI Solutions, Performance Marketing',
    provider: {
      '@type': 'Organization',
      name: 'Gentle Webdesign',
      url: 'https://gentle-webdesign.de',
    },
    areaServed: 'DE',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gentle Webdesign Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web & E-Commerce Development',
            description:
              'Hochperformante Websites und Online-Shops mit Next.js, React, Shopify, WooCommerce und Headless CMS. Pixel-perfekt, SEO-optimiert, DSGVO-konform.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software & KI-Lösungen',
            description:
              'Individuelle Software-Entwicklung, KI-gestützte Automatisierung und Azure Cloud-Integration. OpenAI GPT, Azure AI Services, Custom APIs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Performance Marketing',
            description:
              'Datengetriebene Google Ads, Meta Ads und SEO-Kampagnen. Messbare Ergebnisse, transparentes Reporting, kontinuierliche Optimierung.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software-Wartungsverträge',
            description:
              'Proaktive Software-Wartung, Security-Updates, Performance-Monitoring und 24/7-Notfall-Support. Drei Pakete von Basic (€299/Monat) bis Enterprise (€1.499/Monat).',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
