import { stays } from '../data/stays';
import { places } from '../data/places';
import { affiliate } from '../data/site';
import type { Amenity, Category, LatLng, Stay, StayType } from '../data/types';

export function distanceMeters(a: LatLng, b: LatLng): number {
  const R = 6371000;
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b[0] - a[0]);
  const dLng = rad(b[1] - a[1]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

const beaches = places.filter((p) => p.kind === 'beach');

/** Straight-line distance to the nearest beach, rounded to a friendly number. */
export function beachDistance(stay: Stay): { meters: number; beach: string } {
  let best = { meters: Infinity, beach: '' };
  for (const b of beaches) {
    const m = distanceMeters(stay.coords, b.coords);
    if (m < best.meters) best = { meters: m, beach: b.name };
  }
  const rounded = best.meters < 100 ? Math.max(20, Math.round(best.meters / 10) * 10) : Math.round(best.meters / 50) * 50;
  return { meters: rounded, beach: best.beach };
}

export function formatDistance(m: number): string {
  if (m <= 60) return 'On the beach';
  if (m < 1000) return `${m}m from the beach`;
  return `${(m / 1000).toFixed(1)}km from the beach`;
}

export function walkMinutes(m: number): number {
  // Straight line × 1.3 for real paths, ~80 m/min walking.
  return Math.max(1, Math.round((m * 1.3) / 80));
}

export function priceLevel(price: number): 1 | 2 | 3 | 4 {
  if (price < 50) return 1;
  if (price < 120) return 2;
  if (price < 250) return 3;
  return 4;
}

export const priceSymbols = (price: number) => '$'.repeat(priceLevel(price));

export const typeLabels: Record<StayType, string> = {
  villa: 'Villa',
  hotel: 'Hotel',
  boutique: 'Boutique hotel',
  guesthouse: 'Guesthouse',
  hostel: 'Hostel',
  apartment: 'Apartment',
};

export const categoryLabels: Record<Category, string> = {
  beachfront: 'Beachfront',
  villas: 'Villas',
  boutique: 'Boutique',
  budget: 'Budget',
  surf: 'Surf stays',
  'long-stays': 'Long stays',
  luxury: 'Luxury',
};

export const amenityLabels: Record<Amenity, string> = {
  pool: 'Pool',
  ac: 'AC',
  wifi: 'Wifi',
  kitchen: 'Kitchen',
  breakfast: 'Breakfast',
  surfboards: 'Surfboards',
  workspace: 'Workspace',
  'sea-view': 'Sea view',
  yoga: 'Yoga',
  parking: 'Parking',
  'monthly-rates': 'Monthly rates',
};

export const providerLabels: Record<string, string> = {
  booking: 'Booking.com',
  agoda: 'Agoda',
  airbnb: 'Airbnb',
  direct: 'the property',
  whatsapp: 'WhatsApp',
};

export function bookingHref(stay: Stay): string | undefined {
  if (!stay.booking) return undefined;
  const { provider, url } = stay.booking;
  if (provider === 'booking' && affiliate.bookingAid) return addParam(url, 'aid', affiliate.bookingAid);
  if (provider === 'agoda' && affiliate.agodaCid) return addParam(url, 'cid', affiliate.agodaCid);
  return url;
}

function addParam(url: string, key: string, value: string) {
  const u = new URL(url);
  u.searchParams.set(key, value);
  return u.toString();
}

export function allStays(): Stay[] {
  return [...stays].sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || (b.rating ?? 0) - (a.rating ?? 0));
}

export function getStay(slug: string) {
  return stays.find((s) => s.slug === slug);
}

export function featuredStays(limit = 6) {
  return allStays().filter((s) => s.featured).slice(0, limit);
}

export function staysIn(category: Category) {
  return allStays().filter((s) => s.categories.includes(category));
}

export function similarStays(stay: Stay, limit = 3) {
  return allStays()
    .filter((s) => s.slug !== stay.slug)
    .map((s) => ({ s, score: s.categories.filter((c) => stay.categories.includes(c)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.s);
}

/** Compact, serialisable shape used by client side map and search scripts. */
export function stayForClient(stay: Stay) {
  const d = beachDistance(stay);
  return {
    slug: stay.slug,
    name: stay.name,
    type: stay.type,
    typeLabel: typeLabels[stay.type],
    categories: stay.categories,
    coords: stay.coords,
    priceFrom: stay.priceFrom,
    priceLevel: priceLevel(stay.priceFrom),
    distance: formatDistance(d.meters),
    amenities: stay.amenities.filter((a) => ['pool', 'ac', 'kitchen', 'surfboards', 'sea-view'].includes(a)).map((a) => amenityLabels[a]),
    bestFor: stay.bestFor[0],
    sleeps: stay.sleeps,
    verified: stay.verified,
    url: `/stays/${stay.slug}/`,
  };
}
export type ClientStay = ReturnType<typeof stayForClient>;
