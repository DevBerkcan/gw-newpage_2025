import { CONFIG } from 'src/global-config';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const TITLES = [
  'E-Commerce Revolution',
  'KI-Chatbot Integration',
  'Corporate Website Relaunch',
  'Web-App für SaaS Startup',
  'SharePoint Intranet',
  'Shopify Premium Store',
  'React Dashboard',
  'Marketing Landing Page',
];

const CONTENT = `
<h4>Die Herausforderung</h4>
<p>Der Kunde benötigte eine moderne, skalierbare Lösung mit erstklassiger User Experience und höchsten Performance-Standards. Die bestehende Infrastruktur war veraltet und konnte den wachsenden Anforderungen nicht mehr gerecht werden.</p>

<h4>Unsere Lösung</h4>
<p>Wir haben eine maßgeschneiderte Lösung mit modernsten Technologien entwickelt:</p>
<ul>
    <li>Next.js 14 mit App Router für optimale Performance</li>
    <li>React 18 mit Server Components</li>
    <li>TypeScript für Type-Safety</li>
    <li>Tailwind CSS für konsistentes Design</li>
    <li>CI/CD Pipeline mit automatisierten Tests</li>
</ul>

<h4>Die Ergebnisse</h4>
<p>Die neue Plattform übertraf alle Erwartungen und lieferte messbare Erfolge:</p>
<ul>
    <li>+165% höhere Conversion Rate</li>
    <li>95% Verbesserung der Ladegeschwindigkeit</li>
    <li>100% Core Web Vitals Score</li>
    <li>-40% Reduzierung der Bounce Rate</li>
    <li>+230% mehr organischer Traffic</li>
</ul>
`;

// ----------------------------------------------------------------------

const getCategory = (index) => {
  if ([1, 2].includes(index)) return _tags[1];
  if ([3, 4].includes(index)) return _tags[2];
  if ([5, 6].includes(index)) return _tags[3];
  return _tags[0];
};

const getGalleryImgs = () => Array.from({ length: 6 }, (_, index) => _mock.image.marketing(index));

export const _caseStudies = TITLES.map((_, index) => ({
  id: _mock.id(index),
  content: CONTENT,
  title: TITLES[index],
  createdAt: _mock.time(index),
  website: 'https://example.com/',
  description: _mock.description(index),
  coverUrl: _mock.image.marketing(index + 1),
  heroUrl: `${CONFIG.assetsDir}/assets/images/marketing/marketing-large-1.webp`,
  how_we_work:
    'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
  results:
    'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
  category: getCategory(index),
  galleryImgs: getGalleryImgs(),
}));
