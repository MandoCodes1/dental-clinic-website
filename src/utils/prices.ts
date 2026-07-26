import type { Lang } from '~/i18n';

// Intl drops the thousands separator on four-digit numbers in es-ES ("1100"),
// but price convention here wants "1.100 €", so group the digits by hand.
function group(n: number, separator: string): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export function formatPrice(amount: number, lang: Lang): string {
  return lang === 'es' ? `${group(amount, '.')} €` : `€${group(amount, ',')}`;
}
