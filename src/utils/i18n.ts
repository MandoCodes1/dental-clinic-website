import esTranslations from '../i18n/es.json';
import enTranslations from '../i18n/en.json';

export type Language = 'es' | 'en';

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export function getLanguageFromURL(pathname: string): Language {
  const langMatch = pathname.match(/^\/(en)/);
  return langMatch ? 'en' : 'es';
}

export function useTranslations(lang: Language = 'es') {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === 'en') {
    return `/en${path}`;
  }
  return path;
}

export function switchLanguagePath(currentPath: string): string {
  if (currentPath.startsWith('/en')) {
    return currentPath.replace(/^\/en/, '') || '/';
  }
  return `/en${currentPath}`;
}

export const languages = {
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
  },
};

