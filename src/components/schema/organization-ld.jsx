// components/schema/organization-ld.jsx

export function OrganizationLD() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gentle Webdesign',
    alternateName: 'GentleWebdesign',
    url: 'https://gentle-webdesign.de',
    logo: 'https://gentle-webdesign.de/logo/logo-single.svg',
    description:
      'Performance-Marketing, individuelle Software-Entwicklung und KI-Lösungen aus einer Hand. Azure-zertifiziert, DSGVO-konform.',
    foundingDate: '2020',
    sameAs: [
      'https://www.linkedin.com/company/gentle-webdesign',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-175-4701832',
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: ['de', 'en'],
      email: 'info@gentle-webdesign.de',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
      addressLocality: 'Deutschland',
    },
    founder: {
      '@type': 'Person',
      name: 'Berk-Can Atesoglu',
      jobTitle: 'CEO & Full-Stack Developer',
    },
    employee: [
      {
        '@type': 'Person',
        name: 'Berk-Can Atesoglu',
        jobTitle: 'CEO & Full-Stack Developer',
      },
      {
        '@type': 'Person',
        name: 'Medin Turkes',
        jobTitle: 'Team Lead & UX Designer',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Germany',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
