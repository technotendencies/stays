import type { Place } from './types';

/**
 * Points of interest on the stay map. Coordinates are approximate and should be
 * checked on the ground before launch. Restaurants are demo entries until verified.
 */
export const places: Place[] = [
  {
    slug: 'hiriketiya-beach',
    name: 'Hiriketiya Beach',
    kind: 'beach',
    coords: [5.9637, 80.7086],
    note: 'The horseshoe bay itself. Calm swimming in the middle, surf on the sides.',
    verified: true,
  },
  {
    slug: 'dikwella-beach',
    name: 'Dikwella Beach',
    kind: 'beach',
    coords: [5.9628, 80.6975],
    note: 'Long, quieter stretch of sand next to Dikwella town.',
    verified: true,
  },
  {
    slug: 'hiriketiya-beach-break',
    name: 'Hiriketiya beach break',
    kind: 'surf',
    coords: [5.9632, 80.7078],
    note: 'Mellow, sand bottom waves inside the bay. The classic beginner and longboard spot.',
    verified: true,
  },
  {
    slug: 'hiriketiya-reef',
    name: 'Hiriketiya reef',
    kind: 'surf',
    coords: [5.9626, 80.7101],
    note: 'Faster, hollower wave over reef. Intermediate to advanced surfers only.',
    verified: false,
  },
  {
    slug: 'demo-bay-cafe',
    name: 'Bay Café (demo)',
    kind: 'restaurant',
    coords: [5.9643, 80.7079],
    note: 'Demo entry: smoothie bowls, coffee and breakfast right on the sand.',
    verified: false,
  },
  {
    slug: 'demo-jungle-kitchen',
    name: 'Jungle Kitchen (demo)',
    kind: 'restaurant',
    coords: [5.9661, 80.7068],
    note: 'Demo entry: Sri Lankan rice & curry and wood fired dinners on the hill.',
    verified: false,
  },
  {
    slug: 'demo-sunset-bar',
    name: 'Sunset Bar (demo)',
    kind: 'restaurant',
    coords: [5.9641, 80.7097],
    note: 'Demo entry: cocktails and grilled fish with a view over the reef.',
    verified: false,
  },
];
