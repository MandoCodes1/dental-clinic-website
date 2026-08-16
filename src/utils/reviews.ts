import reviewsData from '../data/reviews';
import type { TreatmentId } from '../config';

export interface Review {
  name: string;
  source: string;
  rating: number;
  text_en: string;
  text_es: string;
  date: string;
  link: string;
  clinic: string;
  avatar: string;
  /** Treatments this review clearly talks about; used to pick reviews for treatment pages. */
  treatments?: TreatmentId[];
}

const topReviewsOrder = [
  'Isabel',
  'Nuria Salido Iniesta',
  'Emma',
  'Teresa Vez luque',
  'Gerson Suaznabar',
  'Giuseppe Tinaglia',
  'customer',
  'J Ainsworth',
  'Santi Barreche Pelaez',
  'Laura Scott',
  'S F',
  'Zoe King',
];

export function getAllReviews(): Review[] {
  return reviewsData as Review[];
}

export function getFeaturedReviews(count: number = 8): Review[] {
  const reviews = getAllReviews();
  const orderedReviews: Review[] = [];

  // Add reviews in the specified order
  topReviewsOrder.forEach((name) => {
    const review = reviews.find((r) => r.name === name);
    if (review) {
      orderedReviews.push(review);
    }
  });

  // Fill remaining slots with other 5-star reviews
  const remainingReviews = reviews.filter((r) => !orderedReviews.includes(r) && r.rating === 5);

  return [...orderedReviews, ...remainingReviews].slice(0, count);
}

export function getReviewsByClinic(clinic: string): Review[] {
  return getAllReviews().filter((r) => r.clinic === clinic);
}

// Reviews for a treatment page: the ones tagged with that treatment, topped up
// with general featured reviews when a treatment has too few tagged mentions.
export function getTreatmentReviews(treatment: TreatmentId, count: number = 3): Review[] {
  const tagged = getAllReviews().filter((r) => r.rating === 5 && r.treatments?.includes(treatment));
  const fill = getFeaturedReviews(count).filter((r) => !tagged.includes(r));
  return [...tagged, ...fill].slice(0, count);
}

export function getAvatarDisplay(avatar: string): {
  type: 'image' | 'initials';
  value: string;
  color?: string;
} {
  if (avatar.startsWith('http')) {
    return { type: 'image', value: avatar };
  }
  // Format like "EM, green" or "CU, pink"
  const [initials, color] = avatar.split(', ');
  return { type: 'initials', value: initials, color: color || 'blue' };
}
