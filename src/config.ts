// Single source of truth for non-translated facts about the site and clinic.

export const SITE = {
  domain: 'https://www.draeugeniavila.com',
  name: 'Dra. Eugenia Vila',
  defaultLang: 'es' as const,
  // No google-site-verification meta tag: both domains are verified in Search
  // Console through Cloudflare's provider integration, which needs nothing here.
  // Branded share card lives in /public; added in the polish phase.
  ogImage: '/og.jpg',
};

export const CLINIC = {
  phoneDisplay: '+34 679 975 580',
  whatsapp: '34679975580',
  email: 'eugeniavila63@gmail.com',
  addressLine: 'Av. Juan Sebastián Elcano, 191, 2ª planta',
  addressCity: '29017 Málaga, España',
  // Coordinates of the El Palo clinic (labelled Google place).
  mapEmbedSrc:
    'https://www.google.com/maps?q=Cl%C3%ADnica%20Dental%20Dra.%20Eugenia%20Vila%2C%20Av.%20Juan%20Sebasti%C3%A1n%20Elcano%20191%2C%2029017%20M%C3%A1laga&z=16&output=embed',
  mapsPlaceUrl:
    'https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica%20Dental%20Dra.%20Eugenia%20Vila%2C%20Av.%20Juan%20Sebasti%C3%A1n%20Elcano%20191%2C%2029017%20M%C3%A1laga',
  reviewUrl: 'https://g.page/r/CaQGrzr7SlRIEAE/review',
  linkedin: 'https://www.linkedin.com/in/eugenia-vila-garcia/',
  doctoralia: 'https://www.doctoralia.es/maria-eugenia-vila-garcia/dentista/malaga',
  gdc: '287705',
  awardYear: 2024,
  years: 30,
  patients: 20000,
} as const;

// Stable list + presentation metadata for the four services, reused by the
// overview, the detailed service page, and footer deep-links. Copy is per-locale
// in src/content/site.ts, keyed by the same id.
export const SERVICES = [
  { id: 'implants', anchor: 'implantes', icon: 'tabler:dental' },
  { id: 'oral', anchor: 'cirugia', icon: 'tabler:medical-cross' },
  { id: 'aligners', anchor: 'alineadores', icon: 'tabler:mood-smile' },
  { id: 'cosmetic', anchor: 'estetica', icon: 'tabler:sparkles' },
] as const;

export type ServiceId = (typeof SERVICES)[number]['id'];

// Starting-from treatment prices in euros. Single source for the prices page
// and any "desde" tags elsewhere, so the numbers cannot drift between pages.
// Provisional until Dra. Vila confirms the final list.
export const PRICES = {
  implantCrown: 1100,
  filling: 50,
  extraction: 50,
  reconstruction: 100,
  cleaning: 50,
  zirconiaCrown: 400,
  whitening: 300,
  aligners: 1500,
  compositeVeneer: 200,
} as const;

export type PriceId = keyof typeof PRICES;

export function waLink(message?: string): string {
  const base = `https://wa.me/${CLINIC.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Umami Cloud analytics. The website id is public (it ships in the page source),
// so it lives here rather than in an env var. Empty means the tag is not rendered.
export const ANALYTICS = {
  umamiWebsiteId: 'd7017335-3ab7-4991-9dbf-30e172ebaf62',
  umamiScriptUrl: 'https://cloud.umami.is/script.js',
  // Restricting to the live host keeps dev and preview traffic out of the stats.
  umamiDomains: 'www.draeugeniavila.com',
} as const;

// Affiliate program ids. Dr. Vila's amazon.es Associates tracking id.
export const AFFILIATE = {
  amazonTagEs: 'evdentalclini-21',
} as const;

// Build an amazon.es link carrying the affiliate tag. With an ASIN it points at
// the product page; without one (e.g. a placeholder entry) it falls back to a
// tagged search so a link is never broken.
export function amazonLink(asin?: string, name?: string): string {
  const tag = `tag=${AFFILIATE.amazonTagEs}`;
  if (asin) return `https://www.amazon.es/dp/${asin}?${tag}`;
  return `https://www.amazon.es/s?k=${encodeURIComponent(name ?? '')}&${tag}`;
}
