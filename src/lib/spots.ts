import { spots, type Spot, type SpotTag, type Weekday } from '../data/spots';
import { distanceMeters, walkMinutes } from './stays';
import type { IconName } from './icons';
import type { LatLng } from '../data/types';

export const tagLabels: Record<SpotTag, string> = {
  breakfast: 'Breakfast',
  coffee: 'Coffee',
  food: 'Food',
  'cheap-eats': 'Cheap eats',
  hoppers: 'Hoppers',
  poke: 'Poke',
  buffet: 'Buffet',
  dessert: 'Dessert',
  drinks: 'Drinks',
  nightlife: 'Nightlife',
  social: 'Social',
  sunset: 'Sunset',
  views: 'Views',
  beach: 'Beach',
  nature: 'Nature',
  snorkelling: 'Snorkelling',
  surf: 'Surf',
  work: 'Work',
  massage: 'Massage',
  wellness: 'Wellness',
  sport: 'Sport',
  'pool-table': 'Pool table',
  market: 'Market',
  laundry: 'Laundry',
};

export const tagIcons: Partial<Record<SpotTag, IconName>> = {
  breakfast: 'sun',
  coffee: 'coffee',
  food: 'utensils',
  'cheap-eats': 'wallet',
  drinks: 'wine',
  nightlife: 'music',
  social: 'users',
  sunset: 'sunset',
  views: 'mountain',
  beach: 'umbrella',
  nature: 'palmtree',
  snorkelling: 'fish',
  surf: 'waves',
  work: 'laptop',
  massage: 'hand',
  wellness: 'heart',
  sport: 'tv',
  laundry: 'shirt',
};

/** The filters on the Hiriketiya Local Map. Selected filters combine (Work + Coffee). */
export const mapFilters: { key: string; label: string; icon: IconName; tags?: SpotTag[] }[] = [
  { key: 'breakfast', label: 'Breakfast', icon: 'sun', tags: ['breakfast'] },
  { key: 'coffee', label: 'Coffee', icon: 'coffee', tags: ['coffee'] },
  { key: 'surf', label: 'Surf', icon: 'waves', tags: ['surf'] },
  { key: 'work', label: 'Work', icon: 'laptop', tags: ['work'] },
  { key: 'cheap-eats', label: 'Cheap eats', icon: 'wallet', tags: ['cheap-eats'] },
  { key: 'drinks', label: 'Drinks', icon: 'wine', tags: ['drinks'] },
  { key: 'sunset', label: 'Sunset', icon: 'sunset', tags: ['sunset'] },
  { key: 'tonight', label: 'Tonight', icon: 'music' },
  { key: 'massage', label: 'Massage', icon: 'hand', tags: ['massage'] },
  { key: 'stay', label: 'Stay', icon: 'house' },
  { key: 'wellness', label: 'Wellness', icon: 'heart', tags: ['wellness'] },
  { key: 'laundry', label: 'Laundry', icon: 'shirt', tags: ['laundry'] },
];

export const weekdays: { key: Weekday; label: string }[] = [
  { key: 'mon', label: 'Monday' },
  { key: 'tue', label: 'Tuesday' },
  { key: 'wed', label: 'Wednesday' },
  { key: 'thu', label: 'Thursday' },
  { key: 'fri', label: 'Friday' },
  { key: 'sat', label: 'Saturday' },
  { key: 'sun', label: 'Sunday' },
];

export const allSpots = () => [...spots].sort((a, b) => Number(!!b.localPick) - Number(!!a.localPick) || a.name.localeCompare(b.name));

export const getSpot = (slug: string) => spots.find((s) => s.slug === slug);

export const spotsWith = (...tags: SpotTag[]) => allSpots().filter((s) => tags.some((t) => s.tags.includes(t)));

export const hasEvents = (s: Spot) => !!s.events?.length;

/** Spots near a point, nearest first. Only spots with a confirmed pin. */
export function spotsNear(point: LatLng, opts: { limit?: number; tags?: SpotTag[]; exclude?: string } = {}) {
  return spots
    .filter((s) => s.coords && s.slug !== opts.exclude && (!opts.tags || opts.tags.some((t) => s.tags.includes(t))))
    .map((s) => ({ spot: s, meters: distanceMeters(point, s.coords!) }))
    .sort((a, b) => a.meters - b.meters)
    .slice(0, opts.limit ?? 6);
}

/** "4 min walk" for short hops, "5 min by scooter" beyond about 1.2 km. */
export function travelLabel(meters: number) {
  if (meters <= 1200) return `${walkMinutes(meters)} min walk`;
  // Scooter: straight line × 1.4 for roads, about 400 m per minute.
  return `${Math.max(2, Math.round((meters * 1.4) / 400))} min by scooter`;
}

/** Compact, serialisable shape for the client side map and favourites. */
export function spotForClient(s: Spot) {
  return {
    slug: s.slug,
    name: s.name,
    tags: s.tags,
    coords: s.coords ?? null,
    summary: s.summary,
    localPick: !!s.localPick,
    tonight: hasEvents(s),
    url: `/local/${s.slug}/`,
  };
}
export type ClientSpot = ReturnType<typeof spotForClient>;

/** Straight line distance in metres to the nearest pinned spot with any of the tags. */
export function nearestMeters(point: LatLng, tags: SpotTag[]): number {
  const near = spotsNear(point, { tags, limit: 1 })[0];
  return near ? near.meters : Infinity;
}
