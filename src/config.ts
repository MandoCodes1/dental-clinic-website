// Single source of truth for non-translated facts about the site and clinic.

export const SITE = {
  domain: 'https://www.dreugeniavila.com',
  name: 'Dra. Eugenia Vila',
  defaultLang: 'es' as const,
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
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

export function waLink(message?: string): string {
  const base = `https://wa.me/${CLINIC.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
