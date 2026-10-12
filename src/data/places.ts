import type { Place } from './types';

/**
 * Beaches and surf spots on the maps, from OpenStreetMap. Restaurants, bars and
 * other recommendations live in spots.ts.
 */
export const places: Place[] = [
  {
    slug: 'hiriketiya-beach',
    name: 'Hiriketiya Beach',
    kind: 'beach',
    coords: [5.9625, 80.7076],
    note: 'The horseshoe bay itself. Calm swimming in the middle, surf on the sides.',
    verified: true,
  },
  {
    slug: 'dikwella-beach',
    name: 'Dikwella Beach',
    kind: 'beach',
    coords: [5.962, 80.69985],
    note: 'Long, quieter stretch of sand next to Dikwella town.',
    verified: true,
  },
  {
    slug: 'dikwella-beach-west',
    name: 'Dikwella Beach (west)',
    kind: 'beach',
    coords: [5.96127, 80.68684],
    note: 'The western end of Dikwella beach, by the Batigama peninsula.',
    verified: true,
  },
  {
    slug: 'bathigama-beach',
    name: 'Bathigama Beach',
    kind: 'beach',
    coords: [5.9595, 80.67939],
    note: 'Quiet beach at the far western end of Dikwella.',
    verified: true,
  },
  {
    slug: 'blue-beach-island',
    name: 'Blue Beach Island',
    kind: 'beach',
    coords: [5.96081, 80.71974],
    note: 'A small island joined to the shore by a sand bar at Nilwella, just east of Hiriketiya.',
    verified: true,
  },
  {
    slug: 'hiriketiya-beach-break',
    name: 'Hiriketiya beach break',
    kind: 'surf',
    coords: [5.96154, 80.70776],
    note: 'Mellow, sand bottom waves inside the bay. The classic beginner and longboard spot.',
    verified: true,
  },
  {
    slug: 'hiriketiya-reef',
    name: 'Hiriketiya reef',
    kind: 'surf',
    coords: [5.96141, 80.70894],
    note: 'Faster, hollower wave over reef. Intermediate to advanced surfers only.',
    verified: false,
  },
];
