// Single source of truth for non-translated facts about the site and clinic.

import type { RouteKey } from '~/i18n';

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
  // E.164 form for tel: links and structured data.
  phoneE164: '+34679975580',
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
  // Google Business Profile place page, confirmed to resolve to the clinic.
  gbpUrl: 'https://g.page/r/CaQGrzr7SlRIEAE',
  // Exact pin off the profile (plus code PJCQ+GG Málaga).
  geo: { latitude: 36.721317, longitude: -4.361166 },
  linkedin: 'https://www.linkedin.com/in/eugenia-vila-garcia/',
  doctoralia: 'https://www.doctoralia.es/maria-eugenia-vila-garcia/dentista/malaga',
  gdc: '287705',
  awardYear: 2024,
  years: 30,
  patients: 20000,
} as const;

// Starting-from treatment prices in euros. Single source for the price tables
// and every "desde" tag, so the numbers cannot drift.
// Provisional until Dra. Vila confirms the final list.
const BASE_PRICES = {
  implantCrown: 1100,
  boneGraft: 300,
  sinusLift: 600,
  filling: 50,
  extraction: 50,
  complexExtraction: 100,
  reconstruction: 100,
  cleaning: 50,
  nightGuard: 200,
  zirconiaCrown: 400,
  whitening: 300,
  aligners: 1500,
  compositeVeneer: 200,
} as const;

export const PRICES = {
  ...BASE_PRICES,
  // Implant placement alone; the advertised bundle is implantOnly + zirconiaCrown,
  // so the split always adds up to the implantCrown total.
  implantOnly: BASE_PRICES.implantCrown - BASE_PRICES.zirconiaCrown,
} as const;

export type PriceId = keyof typeof PRICES;

// The six treatment categories behind the treatments section: overview cards,
// the per-treatment pages, the header dropdown and footer deep-links. Copy is
// per-locale in src/content/site.ts, keyed by the same id.
export const TREATMENTS = [
  { id: 'implants', route: 'treatmentImplants', icon: 'tabler:dental' },
  { id: 'oralSurgery', route: 'treatmentOralSurgery', icon: 'tabler:medical-cross' },
  { id: 'orthodontics', route: 'treatmentOrthodontics', icon: 'tabler:mood-smile' },
  { id: 'aesthetics', route: 'treatmentAesthetics', icon: 'tabler:sparkles' },
  { id: 'general', route: 'treatmentGeneral', icon: 'tabler:dental-broken' },
  { id: 'crowns', route: 'treatmentCrowns', icon: 'tabler:crown' },
] as const satisfies readonly { id: string; route: RouteKey; icon: string }[];

export type TreatmentId = (typeof TREATMENTS)[number]['id'];

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
