// Locale + routing helpers. One ROUTES map is the single source of truth for the
// bilingual URL pairs, consumed by the nav, the language toggle, and hreflang.

export type Lang = 'es' | 'en';

export const LANGS: Lang[] = ['es', 'en'];

export const ROUTES = {
  home: { es: '/', en: '/en' },
  about: { es: '/sobre-mi', en: '/en/about' },
  services: { es: '/servicios', en: '/en/services' },
  reviews: { es: '/resenas', en: '/en/reviews' },
  gallery: { es: '/galeria', en: '/en/gallery' },
  contact: { es: '/contacto', en: '/en/contact' },
  privacy: { es: '/privacy', en: '/en/privacy' },
  terms: { es: '/terms', en: '/en/terms' },
} as const;

export type RouteKey = keyof typeof ROUTES;

// Page keys that appear in the main navigation, in order.
export const NAV_KEYS = ['home', 'about', 'services', 'reviews', 'gallery', 'contact'] as const;

export const LANG_META = {
  es: { label: 'ES', name: 'Español', ogLocale: 'es_ES' },
  en: { label: 'EN', name: 'English', ogLocale: 'en_GB' },
} as const;

export function getLangFromUrl(url: URL): Lang {
  return /^\/en(\/|$)/.test(url.pathname) ? 'en' : 'es';
}

// Given the current path, return its counterpart in the other language.
export function switchLangPath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const current: Lang = /^\/en(\/|$)/.test(clean) ? 'en' : 'es';
  const other: Lang = current === 'es' ? 'en' : 'es';
  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    if (ROUTES[key][current] === clean) return ROUTES[key][other];
  }
  return ROUTES.home[other];
}
