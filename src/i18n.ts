// Locale + routing helpers. One ROUTES map is the single source of truth for the
// bilingual URL pairs, consumed by the nav, the language toggle, and hreflang.

export type Lang = 'es' | 'en';

export const LANGS: Lang[] = ['es', 'en'];

export const ROUTES = {
  home: { es: '/', en: '/en' },
  about: { es: '/sobre-mi', en: '/en/about' },
  services: { es: '/servicios', en: '/en/services' },
  prices: { es: '/precios', en: '/en/prices' },
  treatments: { es: '/tratamientos', en: '/en/treatments' },
  treatmentImplants: { es: '/tratamientos/implantes', en: '/en/treatments/dental-implants' },
  treatmentOralSurgery: { es: '/tratamientos/cirugia-oral', en: '/en/treatments/oral-surgery' },
  treatmentOrthodontics: { es: '/tratamientos/ortodoncia-invisible', en: '/en/treatments/invisible-orthodontics' },
  treatmentAesthetics: { es: '/tratamientos/estetica-dental', en: '/en/treatments/cosmetic-dentistry' },
  treatmentGeneral: { es: '/tratamientos/odontologia-general', en: '/en/treatments/general-dentistry' },
  treatmentCrowns: { es: '/tratamientos/coronas-y-protesis', en: '/en/treatments/crowns-and-prosthetics' },
  reviews: { es: '/resenas', en: '/en/reviews' },
  gallery: { es: '/galeria', en: '/en/gallery' },
  products: { es: '/productos', en: '/en/products' },
  contact: { es: '/contacto', en: '/en/contact' },
  faq: { es: '/preguntas-frecuentes', en: '/en/faq' },
  privacy: { es: '/privacy', en: '/en/privacy' },
  terms: { es: '/terms', en: '/en/terms' },
} as const;

export type RouteKey = keyof typeof ROUTES;

// Main navigation, grouped for the desktop header: top-level links, then a "more"
// dropdown for the low-intent pages, then contact. Home is not listed; the logo
// links there. NAV_ALL is the flat display order used by the mobile menu and footer.
export const NAV_TOP = ['about', 'services', 'prices', 'reviews'] as const;
export const NAV_MORE = ['gallery', 'products', 'faq'] as const;
export const NAV_TAIL = ['contact'] as const;
export const NAV_ALL = [...NAV_TOP, ...NAV_MORE, ...NAV_TAIL] as const;

export type NavKey = (typeof NAV_ALL)[number];

export const LANG_META = {
  es: { label: 'ES', name: 'Español', ogLocale: 'es_ES' },
  en: { label: 'EN', name: 'English', ogLocale: 'en_GB' },
} as const;

// With `build.format: 'file'`, Astro.url.pathname at build time carries the on-disk
// name (`/en.html`, `/en/about.html`, `/index.html`), not the clean route it is
// served at. Reduce any of those forms to the ROUTES shape before comparing.
export function normalizePath(pathname: string): string {
  const clean = pathname.replace(/\.html$/, '').replace(/\/+$/, '');
  return clean === '' || clean === '/index' ? '/' : clean;
}

export function getLangFromUrl(url: URL): Lang {
  return /^\/en(\/|$)/.test(normalizePath(url.pathname)) ? 'en' : 'es';
}

// Given the current path, return its counterpart in the other language.
export function switchLangPath(pathname: string): string {
  const clean = normalizePath(pathname);
  const current: Lang = /^\/en(\/|$)/.test(clean) ? 'en' : 'es';
  const other: Lang = current === 'es' ? 'en' : 'es';
  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    if (ROUTES[key][current] === clean) return ROUTES[key][other];
  }
  return ROUTES.home[other];
}
