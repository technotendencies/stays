import type { Category, Stay } from './types';
import { nearestMeters } from '../lib/spots';

export interface Faq {
  q: string;
  a: string;
}

/**
 * SEO landing pages. Each targets one search intent ("hiriketiya villas",
 * "cheap accommodation hiriketiya" …) and is generated at /{slug}/.
 */
export interface Collection {
  slug: string;
  /** Short label used in nav, chips and funnel CTAs. */
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  intro: string[];
  category?: Category;
  filter?: (s: Stay) => boolean;
  sort?: (a: Stay, b: Stay) => number;
  faq: Faq[];
  relatedGuides: string[];
  /** Show stays grouped by area (bay, Pehebiya, Dikwella …). */
  showAreas?: boolean;
}

export const collections: Collection[] = [
  {
    slug: 'where-to-stay-in-hiriketiya',
    label: 'Where to stay',
    showAreas: true,
    h1: 'Where to stay in Hiriketiya',
    metaTitle: 'Where to Stay in Hiriketiya (2026): Areas, Stays & Map',
    metaDescription:
      'Where to stay in Hiriketiya, Sri Lanka: the bay vs the hill vs Dikwella, with every stay on one map, prices and distance to the beach.',
    keyword: 'where to stay hiriketiya',
    intro: [
      'Hiriketiya is tiny: one horseshoe bay, a road that loops around it and a green hill behind. That makes choosing where to stay easy once you know the three areas.',
      '**The bay** is where everything happens: surf, cafés, sunset. Stay here if you surf or want to walk everywhere. **The hill** is 5 to 15 minutes on foot, quieter, greener and home to most of the villas. **Dikwella** is the next beach west, long, calm sand and bigger properties, a short tuk tuk from the bay.',
    ],
    faq: [
      {
        q: 'What is the best area to stay in Hiriketiya?',
        a: 'For surfers and first timers, stay right on the bay so you can walk to the break, cafés and sunset spots. For a quieter stay with a pool, pick a villa on the hill behind the bay.',
      },
      {
        q: 'Is Dikwella or Hiriketiya better to stay in?',
        a: 'Hiriketiya is smaller and more social; Dikwella beach is longer, calmer and has bigger beachfront properties. They are only about 5 minutes apart by tuk tuk, so you can easily have both.',
      },
      {
        q: 'How many nights do you need in Hiriketiya?',
        a: 'Most people wish they had stayed longer. Three to four nights is a good minimum; surfers and remote workers often stay weeks or months.',
      },
    ],
    relatedGuides: ['hiriketiya-sri-lanka', 'things-to-do-in-hiriketiya', 'how-to-get-to-hiriketiya'],
  },
  {
    slug: 'hiriketiya-hotels',
    label: 'Hotels',
    h1: 'Hiriketiya hotels',
    metaTitle: 'Hiriketiya Hotels: Every Hotel & Guesthouse on One Map',
    metaDescription:
      'Compare every hotel, guesthouse and boutique stay in Hiriketiya: prices, distance to the beach, pool, AC and who each one is best for.',
    keyword: 'hiriketiya hotels',
    intro: [
      'From family run guesthouses to design led boutique hotels, these are the hotels in and around Hiriketiya bay, with honest notes on price, distance to the beach and who they suit.',
    ],
    filter: (s) => ['hotel', 'boutique', 'guesthouse', 'hostel'].includes(s.type),
    faq: [
      {
        q: 'Are there big resort hotels in Hiriketiya?',
        a: 'Not really, and that is part of the charm. Hiriketiya is mostly guesthouses, boutique hotels and villas. For full service beach hotels, look along Dikwella beach next door.',
      },
      {
        q: 'How much does a hotel in Hiriketiya cost?',
        a: 'Roughly $20 to $40 for a hostel bed or simple room, $50 to $120 for a good guesthouse or small hotel, and $150+ for boutique and luxury stays. Prices rise in December to March.',
      },
    ],
    relatedGuides: ['best-time-to-visit-hiriketiya', 'hiriketiya-restaurants'],
  },
  {
    slug: 'best-hotels-in-hiriketiya',
    label: 'Best hotels',
    h1: 'The best hotels in Hiriketiya',
    metaTitle: 'Best Hotels in Hiriketiya (2026): Our Shortlist',
    metaDescription:
      'Our shortlist of the best places to stay in Hiriketiya, Sri Lanka, from surf hostels to pool villas, with beach distance and what each is best for.',
    keyword: 'best hotels hiriketiya',
    intro: [
      'Our shortlist of places to stay in and around Hiriketiya, across every budget, with the stays we like most at the top. Every listing links to its sources so you can check the details yourself.',
    ],
    faq: [
      {
        q: 'What is the best hotel in Hiriketiya for couples?',
        a: 'Look for a boutique hotel facing the bay or a small villa with a plunge pool on the hill. Both give you privacy with the beach a short walk away.',
      },
    ],
    relatedGuides: ['hiriketiya-sri-lanka', 'best-time-to-visit-hiriketiya'],
  },
  {
    slug: 'hiriketiya-villas',
    label: 'Villas',
    h1: 'Hiriketiya villas',
    metaTitle: 'Hiriketiya Villas with Private Pools: Map & Prices',
    metaDescription:
      'Private villas in Hiriketiya and Dikwella with pools, staff and space for families and groups. Compare size, price and walk to the beach.',
    keyword: 'hiriketiya villas',
    intro: [
      'Villas are the best kept secret of Hiriketiya. Most sit on the hill behind the bay, hidden in coconut groves, with private pools, a house cook and a 5 to 15 minute walk down to the beach.',
    ],
    category: 'villas',
    faq: [
      {
        q: 'Do Hiriketiya villas come with staff?',
        a: 'Many do. It is common for a villa to include a housekeeper and a cook who can prepare Sri Lankan breakfasts and dinners. Ask when you book.',
      },
      {
        q: 'Are there beachfront villas in Hiriketiya?',
        a: 'Directly on Hiriketiya bay they are rare. For villas with a lawn running onto the sand, look at Dikwella beach, five minutes west.',
      },
    ],
    relatedGuides: ['things-to-do-in-hiriketiya', 'how-to-get-to-hiriketiya'],
  },
  {
    slug: 'hiriketiya-beachfront-hotels',
    label: 'Beachfront',
    h1: 'Beachfront hotels in Hiriketiya',
    metaTitle: 'Hiriketiya Beachfront Hotels & Villas on the Sand',
    metaDescription:
      'Beachfront stays in Hiriketiya and Dikwella. Wake up to the bay. Every option with exact distance to the sand, sea views and prices.',
    keyword: 'hiriketiya beachfront hotels',
    intro: [
      'Want to roll out of bed and onto the sand? These stays are on or within a couple of minutes of the beach, most with sea views.',
    ],
    category: 'beachfront',
    faq: [
      {
        q: 'Is it noisy staying on the beach in Hiriketiya?',
        a: 'The bay can be lively in the evenings during peak season, especially at weekends. If you are a light sleeper, choose a beachfront stay on Dikwella beach or a room facing away from the bars.',
      },
    ],
    relatedGuides: ['hiriketiya-weather', 'best-time-to-visit-hiriketiya'],
  },
  {
    slug: 'cheap-accommodation-hiriketiya',
    label: 'Budget',
    h1: 'Cheap accommodation in Hiriketiya',
    metaTitle: 'Cheap Accommodation in Hiriketiya: Stays Under $60',
    metaDescription:
      'Budget stays in Hiriketiya: hostels, guesthouses and cabanas under $60 a night, close to the beach. With map and real prices.',
    keyword: 'cheap accommodation hiriketiya',
    intro: [
      'Hiriketiya has a reputation for being pricier than the rest of the south coast, but there are still great value guesthouses, cabanas and hostels if you know where to look.',
    ],
    category: 'budget',
    sort: (a, b) => (a.priceFrom ?? Infinity) - (b.priceFrom ?? Infinity),
    faq: [
      {
        q: 'What is the cheapest way to stay in Hiriketiya?',
        a: 'A hostel dorm or a simple guesthouse room a few minutes inland. Staying a week or more? Ask for a weekly rate, as many small guesthouses will discount.',
      },
      {
        q: 'Is Hiriketiya expensive?',
        a: 'It is more expensive than towns like Matara or Tangalle, especially in peak season (December to March). Visiting in April or November gets you noticeably lower prices.',
      },
    ],
    relatedGuides: ['how-to-get-to-hiriketiya', 'best-time-to-visit-hiriketiya'],
  },
  {
    slug: 'luxury-hotels-hiriketiya',
    label: 'Luxury',
    h1: 'Luxury hotels and villas in Hiriketiya',
    metaTitle: 'Luxury Hotels in Hiriketiya: Boutique & Private Villas',
    metaDescription:
      'The most beautiful luxury stays in Hiriketiya: boutique hotels, infinity pools and fully staffed villas near the bay.',
    keyword: 'luxury hotels hiriketiya',
    intro: [
      'Hiriketiya luxury is less marble lobbies, more barefoot design: infinity pools over the bay, open air bathrooms and private chefs.',
    ],
    category: 'luxury',
    sort: (a, b) => (b.priceFrom ?? 0) - (a.priceFrom ?? 0),
    faq: [
      {
        q: 'Is Hiriketiya good for a honeymoon?',
        a: 'Yes. A boutique hotel on the bay or a private villa with a pool is a great honeymoon base, and it pairs well with a few days inland in the hill country.',
      },
    ],
    relatedGuides: ['things-to-do-in-hiriketiya', 'hiriketiya-restaurants'],
  },
  {
    slug: 'hiriketiya-surf-accommodation',
    label: 'Surf stays',
    h1: 'Hiriketiya surf accommodation',
    metaTitle: 'Hiriketiya Surf Accommodation: Surf Houses & Camps',
    metaDescription:
      'Surf stays in Hiriketiya: walk to the break, board rental, lessons and surf check balconies. Compare surf houses, camps and apartments.',
    keyword: 'hiriketiya surf accommodation',
    intro: [
      'Hiriketiya is one of the best places in Sri Lanka to learn and progress: a mellow beach break for beginners and a punchier reef for when you are ready.',
      'These stays are chosen for surfers: close to the water, with board storage or rental, and hosts who know the lessons and conditions.',
    ],
    category: 'surf',
    faq: [
      {
        q: 'Is Hiriketiya good for beginner surfers?',
        a: 'Yes. The beach break in the middle of the bay is one of the friendliest waves on the south coast, and there are plenty of surf schools. It does get crowded in peak season.',
      },
      {
        q: 'When is surf season in Hiriketiya?',
        a: 'The main season runs from around November to April, with the most consistent conditions December to March.',
      },
    ],
    relatedGuides: ['hiriketiya-surf-season', 'hiriketiya-weather'],
  },
  {
    slug: 'hiriketiya-long-term-rental',
    label: 'Long stays',
    h1: 'Hiriketiya long term rentals',
    metaTitle: 'Hiriketiya Long Term Rentals: Monthly Stays & Nomad Apartments',
    metaDescription:
      'Long stays in Hiriketiya for digital nomads and surfers: coliving, coworking and guesthouses with fast wifi and kitchens.',
    keyword: 'hiriketiya long term rental',
    intro: [
      'Plenty of people come to Hiriketiya for a week and stay for a season. These places are set up for it, with coworking spaces, kitchens and fast wifi. Ask each one directly about weekly and monthly rates.',
    ],
    category: 'long-stays',
    sort: (a, b) => (a.monthlyFrom ?? Infinity) - (b.monthlyFrom ?? Infinity),
    faq: [
      {
        q: 'How much does it cost to rent in Hiriketiya for a month?',
        a: 'Very roughly $700 to $1,200 for a simple studio or room and $1,300 to $2,500 for a nicer apartment or cabana, more in December to March. In the off season (May to September), monthly deals are are much easier to negotiate.',
      },
      {
        q: 'Is the internet good enough to work from Hiriketiya?',
        a: 'Many stays now have fibre connections, and 4G is generally good. Always ask for a speed test before committing to a month, and get a local SIM as backup.',
      },
    ],
    relatedGuides: ['best-time-to-visit-hiriketiya', 'hiriketiya-sri-lanka'],
  },
  {
    slug: 'hiriketiya-boutique-hotels',
    label: 'Boutique',
    h1: 'Boutique hotels in Hiriketiya',
    metaTitle: 'Boutique Hotels in Hiriketiya: Small, Stylish Stays',
    metaDescription: 'Small, design led boutique hotels in Hiriketiya with pools, yoga and views over the bay.',
    keyword: 'hiriketiya boutique hotels',
    intro: ['Small, beautifully designed places with a handful of rooms: the style Hiriketiya is known for.'],
    category: 'boutique',
    faq: [],
    relatedGuides: ['hiriketiya-restaurants', 'things-to-do-in-hiriketiya'],
  },
  {
    slug: 'best-hostels-in-hiriketiya',
    label: 'Hostels',
    h1: 'The best hostels in Hiriketiya',
    metaTitle: 'Best Hostels in Hiriketiya: Social, Surf and Budget Beds',
    metaDescription: 'Hostels in Hiriketiya for solo travellers and surfers: dorms, private rooms, kitchens and how close each is to the bay.',
    keyword: 'best hostels hiriketiya',
    intro: [
      'Hostels are the easiest way to meet people in Hiriketiya. These are the ones around the bay, with dorms, private rooms and shared kitchens.',
    ],
    filter: (s) => s.type === 'hostel',
    faq: [],
    relatedGuides: ['three-days-in-hiriketiya', 'how-to-get-to-hiriketiya'],
  },
  {
    slug: 'hiriketiya-stays-for-couples',
    label: 'For couples',
    h1: 'Stays for couples in Hiriketiya',
    metaTitle: 'Hiriketiya Stays for Couples: Plunge Pools, Boutique Rooms and Quiet Villas',
    metaDescription: 'Romantic stays in Hiriketiya for couples: boutique hotels, private villas and rooms with pools, close to the bay.',
    keyword: 'hiriketiya couples',
    intro: ['Boutique rooms, small villas with plunge pools and places that feel private, with the bay a short walk away.'],
    filter: (s) => s.bestFor.some((b) => /couple/i.test(b)) || s.type === 'villa' || s.type === 'boutique',
    faq: [],
    relatedGuides: ['hiriketiya-sri-lanka', 'one-day-in-hiriketiya'],
  },
  {
    slug: 'hiriketiya-digital-nomad-stays',
    label: 'Digital nomads',
    h1: 'Stays for digital nomads in Hiriketiya',
    metaTitle: 'Hiriketiya for Digital Nomads: Stays with Desks, Wifi and Coworking',
    metaDescription: 'Where to stay in Hiriketiya if you work remotely: coliving, coworking and rooms with desks and fast wifi.',
    keyword: 'hiriketiya digital nomad',
    intro: [
      'Working from Hiriketiya is easy if you pick the right base. These stays have desks, coworking or proper wifi. Pair them with our [coworking spots](/hiriketiya-coworking/).',
    ],
    filter: (s) => s.amenities.includes('workspace') || s.categories.includes('long-stays'),
    faq: [],
    relatedGuides: ['best-time-to-visit-hiriketiya', 'three-days-in-hiriketiya'],
  },
  {
    slug: 'hiriketiya-stays-near-nightlife',
    label: 'Near the nightlife',
    h1: 'Stays close to the nightlife in Hiriketiya',
    metaTitle: 'Hiriketiya Stays Near the Nightlife: Walk Home from Dots and ClearPoint',
    metaDescription: 'Stay within walking distance of Hiriketiya nightlife: Dots, ClearPoint and Lychee Bar. Every stay with its walk to the bars.',
    keyword: 'hiriketiya nightlife stay',
    intro: [
      'Going out at Dots or ClearPoint? These stays are within about a 7 minute walk of the bars, so you can walk home. See [what is on tonight](/tonight/).',
    ],
    filter: (s) => nearestMeters(s.coords, ['nightlife']) <= 450,
    sort: (a, b) => nearestMeters(a.coords, ['nightlife']) - nearestMeters(b.coords, ['nightlife']),
    faq: [],
    relatedGuides: ['three-days-in-hiriketiya'],
  },
  {
    slug: 'quiet-stays-hiriketiya',
    label: 'Quiet stays',
    h1: 'Quiet stays in Hiriketiya',
    metaTitle: 'Quiet Stays in Hiriketiya: Away from the Bars',
    metaDescription: 'Peaceful places to stay around Hiriketiya, Dikwella and Nilwella, at least a 10 minute walk from the nightlife.',
    keyword: 'quiet stay hiriketiya',
    intro: [
      'If sleep matters more than parties, stay a little further out. Every stay here is at least a 10 minute walk from the bars, and some are a scooter ride away.',
    ],
    filter: (s) => nearestMeters(s.coords, ['nightlife']) >= 700,
    sort: (a, b) => nearestMeters(b.coords, ['nightlife']) - nearestMeters(a.coords, ['nightlife']),
    faq: [],
    relatedGuides: ['hiriketiya-sri-lanka'],
  },
  {
    slug: 'hiriketiya-family-stays',
    label: 'Families',
    h1: 'Family stays in Hiriketiya',
    metaTitle: 'Hiriketiya with Kids: Family Friendly Stays',
    metaDescription: 'Family friendly places to stay in Hiriketiya and Dikwella: villas, family rooms and hotels with pools.',
    keyword: 'hiriketiya with kids',
    intro: [
      'Hiriketiya bay is calm enough to swim in during the dry season, which makes it a good beach for families. These stays have room for a family, or are listed as family friendly.',
    ],
    filter: (s) => s.bestFor.some((b) => /famil/i.test(b)) || (s.sleeps ?? 0) >= 4,
    faq: [],
    relatedGuides: ['best-time-to-visit-hiriketiya', 'things-to-do-in-hiriketiya'],
  },
];

/** Category → its collection page, used by chips and funnel links. */
export const categoryCollection: Record<Category, string> = {
  beachfront: 'hiriketiya-beachfront-hotels',
  villas: 'hiriketiya-villas',
  boutique: 'hiriketiya-boutique-hotels',
  budget: 'cheap-accommodation-hiriketiya',
  surf: 'hiriketiya-surf-accommodation',
  'long-stays': 'hiriketiya-long-term-rental',
  luxury: 'luxury-hotels-hiriketiya',
};

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
