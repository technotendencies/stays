import type { LatLng } from './types';

/**
 * Local recommendations: food, sunset, nightlife, wellness, work and things to do.
 *
 * Every spot here is a personal local recommendation. Practical facts change fast,
 * so they are tracked separately:
 *  - `checked`: when the spot itself (name, location, still open) was last confirmed.
 *  - `events[].verified`: event days are only shown as fact once confirmed.
 *  - `coords`: only set when the pin is confirmed (currently from OpenStreetMap).
 *    Spots without coords appear in lists but not on the map.
 *  - `toCheck`: what still needs confirming before launch (not shown on the site).
 *
 * Rule: nobody can pay for a place on this list or for a higher position.
 * A sponsored spot must set `sponsored: true`, which labels it on the site.
 */

export type SpotTag =
  | 'breakfast'
  | 'coffee'
  | 'food'
  | 'cheap-eats'
  | 'hoppers'
  | 'poke'
  | 'buffet'
  | 'dessert'
  | 'drinks'
  | 'nightlife'
  | 'social'
  | 'sunset'
  | 'views'
  | 'beach'
  | 'nature'
  | 'snorkelling'
  | 'surf'
  | 'work'
  | 'massage'
  | 'wellness'
  | 'sport'
  | 'pool-table'
  | 'market'
  | 'laundry';

export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface SpotEvent {
  days: Weekday[];
  what: string;
  /** false until someone on the ground has confirmed it is still happening. */
  verified: boolean;
}

export interface Spot {
  slug: string;
  name: string;
  tags: SpotTag[];
  area?: string;
  summary: string;
  /** Longer local take, optional. */
  body?: string[];
  localPick?: boolean;
  budgetGem?: boolean;
  /** 1 = cheap, 4 = splurge. Only when known. */
  price?: 1 | 2 | 3 | 4;
  coords?: LatLng;
  website?: string;
  instagram?: string;
  events?: SpotEvent[];
  /** Short, practical, honest notes ("Ask locally about conditions before you swim"). */
  goodToKnow?: string[];
  /** e.g. "October 2026". Unset means not yet checked on the ground. */
  checked?: string;
  sponsored?: boolean;
  /** Internal launch checklist, never rendered. */
  toCheck?: string;
}

export const spots: Spot[] = [
  // Things to do, beaches and nature
  {
    slug: 'blue-beach-island',
    name: 'Blue Beach Island',
    tags: ['beach', 'nature', 'snorkelling'],
    area: 'Nilwella',
    summary: 'A tiny island joined to the shore by a sand bar. Swim, snorkel and climb up for the view.',
    body: [
      'It is in Nilwella, about 6 km from Hiriketiya, so plan on 10 to 15 minutes by scooter or tuk tuk rather than a walk.',
    ],
    coords: [5.96081, 80.71974],
    goodToKnow: ['About 10 to 15 minutes by scooter or tuk tuk from Hiriketiya.'],
  },
  {
    slug: 'pehebiya-beach',
    name: 'Pehebiya Beach',
    tags: ['beach', 'sunset'],
    area: 'Pehebiya',
    summary: 'Right next door to Hiriketiya and one of the local favourites for sunset.',
    body: ['About a minute by scooter, or five minutes on foot depending on where you start.'],
    localPick: true,
    coords: [5.96204, 80.69985],
    toCheck: 'Agree on the spelling (Pehebiya, Pehembiya or Phembiya) and the exact reference point.',
  },
  {
    slug: 'blue-hole',
    name: 'Blue Hole',
    tags: ['nature', 'beach'],
    summary: 'A natural swimming spot on the coast, about 5 to 10 minutes by scooter.',
    goodToKnow: ['Ask locally about the sea and tide before you swim.'],
    toCheck: 'Exact map name and pin, plus safety information.',
  },
  {
    slug: 'aga-surf-view',
    name: 'Aga Surf View',
    tags: ['surf', 'views'],
    area: 'Unakuruwa',
    summary: 'A nearby surf and coast tip in Unakuruwa, worth the scooter ride.',
    toCheck: 'Exact name and pin.',
  },
  {
    slug: 'turtle-point',
    name: 'Turtle Point',
    tags: ['snorkelling', 'nature'],
    area: 'Bathigama',
    summary: 'A snorkelling spot near Bathigama where you can see turtles in the water.',
    goodToKnow: [
      'Keep your distance: never touch, chase or feed the turtles.',
      'Do not stand on the reef.',
      'Skip sunscreen that harms reefs if you can.',
    ],
    toCheck: 'Exact pin.',
  },
  {
    slug: 'dikwella-market',
    name: 'Dikwella Market',
    tags: ['market', 'cheap-eats'],
    area: 'Dikwella',
    summary: 'The local Saturday market in Dikwella. Fruit, vegetables, snacks and real local life.',
    localPick: true,
    events: [{ days: ['sat'], what: 'Market day', verified: false }],
    toCheck: 'Current times and exact location.',
  },
  {
    slug: 'maha-sauna',
    name: 'Maha Sauna',
    tags: ['wellness'],
    summary: 'Sauna and cold plunge. Exactly what your body wants after a few days of surfing.',
    toCheck: 'Pin, opening hours and prices.',
  },
  {
    slug: 'massage-shed',
    name: 'Massage Shed',
    tags: ['massage', 'wellness'],
    summary: 'Our favourite place for a massage in Hiriketiya.',
    localPick: true,
    toCheck: 'Pin, opening hours and prices.',
  },

  // Sunset, views and day hangs
  {
    slug: 'the-ruin',
    name: 'The Ruin',
    tags: ['food', 'drinks', 'views', 'beach', 'breakfast', 'social'],
    summary: 'One of the strongest picks on the whole beach. Good food, good drinks and a view you will not want to leave.',
    body: [
      'One of our favourite places to spend the whole afternoon. It works for breakfast, a long lunch and drinks as the sun goes down.',
    ],
    localPick: true,
    toCheck: 'Pin. Events are rumoured for later, confirm before listing any.',
  },
  {
    slug: 'la-playa',
    name: 'La Playa',
    tags: ['food', 'drinks', 'views', 'beach'],
    summary: 'An all day beach hangout with food, drinks and the sea right in front of you.',
    toCheck: 'Pin.',
  },
  {
    slug: 'raa',
    name: 'Raa',
    tags: ['food', 'drinks', 'sunset', 'views', 'beach'],
    summary: 'Sri Lankan food and drinks on the beach, and a great spot to watch the sun go down.',
    toCheck: 'Pin.',
  },
  {
    slug: 'betaz',
    name: 'Betaz',
    tags: ['views', 'sunset', 'drinks', 'breakfast'],
    area: 'Hiriketiya',
    summary: 'Go here for the view and for sunset.',
    coords: [5.9598, 80.7033],
  },
  {
    slug: 'cafe-secret-paradise',
    name: 'Café Secret Paradise',
    tags: ['sunset', 'drinks'],
    summary: 'Sunset, drinks and a relaxed atmosphere.',
    toCheck: 'Exact name and pin.',
  },
  {
    slug: 'tommys-chill-and-grill',
    name: "Tommy's Chill & Grill",
    tags: ['sunset', 'food', 'drinks'],
    summary: 'A relaxed place for sunset, food and drinks.',
    toCheck: 'Pin.',
  },
  {
    slug: 'belika',
    name: 'Belika',
    tags: ['breakfast', 'views'],
    summary: 'Breakfast and brunch with a beautiful view.',
    toCheck: 'Pin.',
  },

  // Nightlife and social
  {
    slug: 'dots',
    name: 'Dots',
    tags: ['nightlife', 'social', 'breakfast', 'coffee', 'work', 'drinks'],
    area: 'Hiriketiya',
    summary: 'The social heart of the bay: breakfast, coworking by day and parties at night.',
    localPick: true,
    coords: [5.96321, 80.70766],
    website: 'https://dotsbayhouse.com/',
    events: [{ days: ['sat', 'tue'], what: 'Party', verified: false }],
  },
  {
    slug: 'clearpoint',
    name: 'ClearPoint',
    tags: ['nightlife', 'social', 'sport', 'drinks', 'food'],
    area: 'Hiriketiya',
    summary: 'Karaoke nights, live sport on the screen and an easy place to meet people.',
    coords: [5.96313, 80.70551],
    events: [{ days: ['thu'], what: 'Karaoke', verified: false }],
  },
  {
    slug: 'clearpoint-beer-garden',
    name: 'Beer Garden at ClearPoint',
    tags: ['social', 'drinks'],
    area: 'Hiriketiya',
    summary: 'A German inspired beer garden and one of the best places to meet people.',
    body: ['Good if you are travelling solo and want to meet people.'],
    localPick: true,
  },
  {
    slug: 'rip-robana',
    name: 'Rip Robana',
    tags: ['nightlife'],
    summary: 'The Sunday night spot.',
    events: [{ days: ['sun'], what: 'Party', verified: false }],
    toCheck: 'Spelling, pin and the current event.',
  },
  {
    slug: 'lychee-bar',
    name: 'Lychee Bar',
    tags: ['nightlife', 'drinks'],
    area: 'Hiriketiya',
    summary: 'Where people tend to head for the after party.',
    coords: [5.9629, 80.70772],
    toCheck: 'Confirm the after party nights.',
  },
  {
    slug: 'secret-jungle-party',
    name: 'Secret Jungle Party',
    tags: ['nightlife'],
    summary: 'A party in the jungle near ClearPoint.',
    events: [{ days: [], what: 'Jungle party', verified: false }],
    toCheck: 'Current day and location.',
  },
  {
    slug: 'the-hangout',
    name: 'The Hangout',
    tags: ['social', 'pool-table', 'food', 'drinks'],
    summary: 'Pool table, good food and an easy place to hang out. Good location too.',
    toCheck: 'Pin.',
  },

  // Local and cheap food
  {
    slug: 'kave-waves',
    name: 'Kave Waves',
    tags: ['cheap-eats', 'buffet', 'food'],
    summary: 'A budget favourite with a very good value dinner buffet.',
    localPick: true,
    budgetGem: true,
    price: 1,
    toCheck: 'Current buffet price and days (last heard: around 500 LKR). Pin.',
  },
  {
    slug: 'roti-hut',
    name: 'Roti Hut',
    tags: ['cheap-eats', 'food'],
    area: 'Hiriketiya',
    summary: 'Simple, local and genuinely good roti.',
    budgetGem: true,
    price: 1,
    coords: [5.96441, 80.70745],
  },
  {
    slug: 'rosie-homestay-kitchen',
    name: 'Rosie Homestay & Kitchen',
    tags: ['cheap-eats', 'food'],
    summary: 'Home cooked local food at a family homestay.',
    budgetGem: true,
    price: 1,
    toCheck: 'Pin.',
  },
  { slug: 'scs', name: 'SCS', tags: ['cheap-eats', 'food'], summary: 'Cheap, local and good.', price: 1, toCheck: 'Full name and pin.' },
  { slug: 'kingsley-place', name: 'Kingsley Place', tags: ['cheap-eats', 'food'], summary: 'Local food at local prices.', price: 1, toCheck: 'Pin.' },
  { slug: 'lemongrass-cafe', name: 'Lemongrass Café', tags: ['cheap-eats', 'food'], summary: 'A local café for an easy meal.', toCheck: 'Pin.' },
  { slug: 'lumina', name: 'Lumina', tags: ['cheap-eats', 'food'], summary: 'Local food.', toCheck: 'Name and pin.' },
  { slug: 'taste-of-place', name: 'Taste of Place', tags: ['cheap-eats', 'food'], summary: 'Local food.', toCheck: 'Exact name and pin.' },
  {
    slug: 'dunis-hopper',
    name: "Duni's Hopper",
    tags: ['hoppers', 'cheap-eats', 'work'],
    summary: 'The local favourite for hoppers, and a good place to get some work done.',
    localPick: true,
    budgetGem: true,
    price: 1,
    toCheck: 'Pin.',
  },
  { slug: 'arlos-hopper', name: "Arlo's Hopper", tags: ['hoppers', 'cheap-eats'], summary: 'Great hoppers.', price: 1, toCheck: 'Spelling and pin.' },

  // Best food
  {
    slug: 'smoke-and-bitters',
    name: 'Smoke & Bitters',
    tags: ['food', 'drinks'],
    area: 'Hiriketiya',
    summary: 'A proper dinner and cocktail destination.',
    coords: [5.96136, 80.70135],
  },
  {
    slug: 'malkoha',
    name: 'Malkoha',
    tags: ['breakfast', 'coffee', 'work', 'food'],
    summary: 'Our top pick for breakfast and the best coffee in town. Great food, and a good place to work.',
    localPick: true,
    toCheck: 'Pin.',
  },
  { slug: 'mond', name: 'Mond', tags: ['food'], area: 'Hiriketiya', summary: 'A local food recommendation.', coords: [5.96022, 80.70484] },
  { slug: 'cocosa', name: 'Cocosa', tags: ['food'], summary: 'A local food recommendation.', toCheck: 'Pin.' },
  { slug: 'booka', name: 'Booka', tags: ['food'], summary: 'A local food recommendation.', toCheck: 'Pin.' },
  { slug: 'bacuzzi', name: 'Bacuzzi', tags: ['food'], summary: 'A local food recommendation.', toCheck: 'Spelling and pin.' },
  { slug: 'hirieats', name: 'Hirieats', tags: ['food'], summary: 'A local food recommendation.', toCheck: 'Pin.' },
  { slug: 'mays', name: 'Mays', tags: ['food'], summary: 'A local food recommendation.', toCheck: 'Pin.' },
  { slug: 'high-tide-cielo', name: 'High Tide Cielo', tags: ['food'], summary: 'A local food recommendation.', toCheck: 'Exact name and pin.' },

  // Breakfast, coffee and work
  { slug: 'bayside-breeze', name: 'Bayside Breeze', tags: ['breakfast'], summary: 'Breakfast and brunch.', toCheck: 'Pin.' },
  {
    slug: 'crust-and-crumble',
    name: 'Crust & Crumble',
    tags: ['breakfast', 'coffee', 'work'],
    summary: 'Breakfast, brunch and a café that works well for working.',
    toCheck: 'Pin.',
  },
  { slug: 'locos', name: 'Locos', tags: ['breakfast'], summary: 'Breakfast and brunch.', toCheck: 'Pin.' },
  { slug: 'bunch', name: 'Bunch', tags: ['breakfast'], summary: 'Breakfast and brunch.', toCheck: 'Pin.' },
  { slug: 'the-salty', name: 'The Salty', tags: ['work', 'coffee'], summary: 'A work friendly spot.', toCheck: 'Exact place and pin.' },

  // Poke, buffet, dessert
  { slug: 'maru-poke', name: 'Maru Poke', tags: ['poke', 'food'], summary: 'Poke bowls.', toCheck: 'Pin.' },
  { slug: 'malu-poke', name: 'Malu Poke', tags: ['poke', 'food'], summary: 'Poke bowls.', toCheck: 'Pin.' },
  {
    slug: 'garlic-cafe',
    name: 'Garlic Café',
    tags: ['buffet', 'food'],
    area: 'Hiriketiya',
    summary: 'A buffet recommendation.',
    coords: [5.9662, 80.70696],
    toCheck: 'Buffet days and price.',
  },
  { slug: 'isle-of-gelato', name: 'Isle of Gelato', tags: ['dessert'], summary: 'Gelato when it is hot (so, always).', toCheck: 'Pin.' },

  // Sport
  {
    slug: 'muthu-sea-view',
    name: 'Muthu Sea View',
    tags: ['sport', 'drinks'],
    summary: 'Another good place to catch live sport.',
    toCheck: 'Exact name (Muthu Sea View or Muthu Bar) and pin.',
  },

  // Practical
  {
    slug: 'kumara-laundry',
    name: 'Kumara Laundry Service',
    tags: ['laundry'],
    summary: 'The best laundry service locally.',
    localPick: true,
    toCheck: 'Pin and contact details.',
  },
];
