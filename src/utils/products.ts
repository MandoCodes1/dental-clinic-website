import productsData from '../data/products';

export interface Product {
  id: string;
  category: string;
  asin: string;
  image: string;
  name_es: string;
  name_en: string;
  rationale_es: string;
  rationale_en: string;
}

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter((p) => p.category === category);
}

// Distinct category ids in first-seen order, so the page renders groups in a
// stable, data-driven order without a separate hardcoded list.
export function getProductCategories(): string[] {
  const seen: string[] = [];
  for (const p of getAllProducts()) {
    if (!seen.includes(p.category)) seen.push(p.category);
  }
  return seen;
}
