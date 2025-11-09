// components/schema/website-ld.jsx

export function WebSiteLD() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Gentle Webdesign',
    url: 'https://gentle-webdesign.de',
    description:
      'Performance-Marketing, individuelle Software-Entwicklung und KI-Lösungen aus einer Hand.',
    publisher: {
      '@type': 'Organization',
      name: 'Gentle Webdesign',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gentle-webdesign.de/logo/logo-single.svg',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://gentle-webdesign.de/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['de', 'en'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
