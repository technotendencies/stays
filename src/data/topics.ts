import type { SpotTag } from './spots';
import type { Faq } from './collections';

/**
 * Local guide pages, one per search intent ("best breakfast hiriketiya",
 * "hiriketiya nightlife" …), generated at /{slug}/. Each lists the matching
 * spots and ends with a funnel to the most relevant stays.
 */
export interface Topic {
  slug: string;
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  intro: string[];
  /** Spots with any of these tags are listed. */
  tags: SpotTag[];
  funnel: { headline: string; cta: string; href: string };
  faq?: Faq[];
  /** Show the weekly event list (nightlife). */
  showEvents?: boolean;
}

export const topics: Topic[] = [
  {
    slug: 'best-restaurants-hiriketiya',
    label: 'Restaurants',
    h1: 'The best restaurants in Hiriketiya',
    metaTitle: 'Best Restaurants in Hiriketiya: Where We Actually Eat',
    metaDescription:
      'The restaurants in Hiriketiya we genuinely recommend, from Sri Lankan food on the beach to cocktails and dinner. No paid rankings.',
    keyword: 'best restaurants hiriketiya',
    intro: [
      'These are the places we actually eat at. Nobody pays to be on this list, and local picks are the ones we would send a friend to first.',
      'Looking for something cheaper? See [cheap food in Hiriketiya](/cheap-food-hiriketiya/).',
    ],
    tags: ['food'],
    funnel: { headline: 'Coming to Hiriketiya to eat your way around the bay?', cta: 'Find your stay', href: '/where-to-stay-in-hiriketiya/' },
  },
  {
    slug: 'best-breakfast-hiriketiya',
    label: 'Breakfast',
    h1: 'The best breakfast and brunch in Hiriketiya',
    metaTitle: 'Best Breakfast in Hiriketiya: Brunch, Coffee and Views',
    metaDescription: 'Where to have breakfast and brunch in Hiriketiya, from our favourite café to beach views. Local recommendations, no paid rankings.',
    keyword: 'best breakfast hiriketiya',
    intro: ['After the morning surf, this is where to go. Malkoha is our top pick for breakfast and coffee.'],
    tags: ['breakfast'],
    funnel: { headline: 'Want breakfast a short walk from your bed?', cta: 'See stays on the bay', href: '/hiriketiya-beachfront-hotels/' },
  },
  {
    slug: 'best-coffee-hiriketiya',
    label: 'Coffee',
    h1: 'The best coffee in Hiriketiya',
    metaTitle: 'Best Coffee in Hiriketiya',
    metaDescription: 'Where to get good coffee in Hiriketiya, including the cafés that work well for working.',
    keyword: 'best coffee hiriketiya',
    intro: ['Good coffee is easy to find around the bay. These are the places we go back to.'],
    tags: ['coffee'],
    funnel: { headline: 'Working while you are here?', cta: 'See stays for digital nomads', href: '/hiriketiya-digital-nomad-stays/' },
  },
  {
    slug: 'hiriketiya-nightlife',
    label: 'Nightlife',
    h1: 'Hiriketiya nightlife',
    metaTitle: 'Hiriketiya Nightlife: Parties, Karaoke and Where to Go Out',
    metaDescription:
      'Where to go out in Hiriketiya: parties, karaoke, beer gardens and after parties, with the nights they usually happen.',
    keyword: 'hiriketiya nightlife',
    intro: [
      'Hiriketiya is small, but there is something on most nights of the week. Event nights change, so we mark the ones we have not confirmed recently. Check [tonight in Hiriketiya](/tonight/) for what is on today.',
    ],
    tags: ['nightlife', 'social'],
    showEvents: true,
    funnel: { headline: 'Going out at Dots or ClearPoint?', cta: 'See stays within walking distance', href: '/hiriketiya-stays-near-nightlife/' },
  },
  {
    slug: 'hiriketiya-coworking',
    label: 'Coworking',
    h1: 'Coworking and places to work in Hiriketiya',
    metaTitle: 'Hiriketiya Coworking: Where to Work with Wifi and Coffee',
    metaDescription: 'The best places to work in Hiriketiya: coworking spaces and cafés with wifi, coffee and seating for digital nomads.',
    keyword: 'hiriketiya coworking',
    intro: [
      'Hiriketiya is one of the easiest surf towns in Sri Lanka to work from. These spots have wifi, coffee and somewhere comfortable to sit. Wifi speeds change, so test before a big call.',
    ],
    tags: ['work'],
    funnel: { headline: 'Staying for a few weeks?', cta: 'See stays for digital nomads', href: '/hiriketiya-digital-nomad-stays/' },
  },
  {
    slug: 'hiriketiya-massage',
    label: 'Massage and wellness',
    h1: 'Massage and wellness in Hiriketiya',
    metaTitle: 'Hiriketiya Massage, Sauna and Wellness',
    metaDescription: 'Where to get a massage in Hiriketiya, plus sauna and cold plunge for recovery after surfing.',
    keyword: 'hiriketiya massage',
    intro: ['After a few days of surfing, your shoulders will thank you. Massage Shed is our favourite.'],
    tags: ['massage', 'wellness'],
    funnel: { headline: 'Want a slower, wellness focused trip?', cta: 'See quiet stays', href: '/quiet-stays-hiriketiya/' },
  },
  {
    slug: 'hiriketiya-sunset',
    label: 'Sunset',
    h1: 'The best sunset spots in Hiriketiya',
    metaTitle: 'Hiriketiya Sunset: The Best Spots for Sundowners',
    metaDescription: 'Where to watch the sunset in Hiriketiya: beaches, bars and viewpoints where the view is the reason to go.',
    keyword: 'hiriketiya sunset',
    intro: ['These are the places where the view is the whole point. Get there half an hour before the sun goes down.'],
    tags: ['sunset', 'views'],
    funnel: { headline: 'Want sea views from your room too?', cta: 'See beachfront stays', href: '/hiriketiya-beachfront-hotels/' },
  },
  {
    slug: 'cheap-food-hiriketiya',
    label: 'Cheap eats',
    h1: 'Cheap and local food in Hiriketiya',
    metaTitle: 'Cheap Food in Hiriketiya: Local, Cheap and Genuinely Good',
    metaDescription: 'Where to eat cheaply in Hiriketiya: rice and curry, hoppers, roti and buffets that locals and long stayers love.',
    keyword: 'cheap food hiriketiya',
    intro: [
      'The cafés on the bay are lovely but not cheap. A few minutes inland you will find rice and curry, hoppers and roti for a fraction of the price. Budget gems are the best value of all.',
    ],
    tags: ['cheap-eats', 'hoppers', 'buffet'],
    funnel: { headline: 'Travelling on a budget?', cta: 'See budget stays', href: '/cheap-accommodation-hiriketiya/' },
  },
  {
    slug: 'things-to-do-near-hiriketiya',
    label: 'Beaches and nature',
    h1: 'Beaches and nature near Hiriketiya',
    metaTitle: 'Beaches and Nature near Hiriketiya: Islands, Snorkelling and Hidden Spots',
    metaDescription: 'Beaches, snorkelling spots and nature around Hiriketiya, with honest travel times by scooter.',
    keyword: 'things to do hiriketiya',
    intro: [
      'Once you have done the bay, rent a scooter. These are the beaches and nature spots we send friends to, with realistic travel times. For more ideas, see [things to do in Hiriketiya](/guides/things-to-do-in-hiriketiya/).',
    ],
    tags: ['beach', 'nature', 'snorkelling', 'surf', 'market'],
    funnel: { headline: 'Want to explore by scooter?', cta: 'See stays outside the bay', href: '/quiet-stays-hiriketiya/' },
  },
  {
    slug: 'hiriketiya-for-solo-travellers',
    label: 'Solo travellers',
    h1: 'Hiriketiya for solo travellers',
    metaTitle: 'Hiriketiya for Solo Travellers: Where to Meet People',
    metaDescription: 'Travelling solo in Hiriketiya? Social spots, beer gardens, pool tables and hostels where it is easy to meet people.',
    keyword: 'hiriketiya solo travellers',
    intro: [
      'Hiriketiya is one of the friendliest places on the south coast to travel alone. These are the spots where it is easy to meet people.',
    ],
    tags: ['social'],
    funnel: { headline: 'Want to meet people where you sleep, too?', cta: 'See hostels', href: '/best-hostels-in-hiriketiya/' },
  },
  {
    slug: 'hiriketiya-practical',
    label: 'Practical',
    h1: 'Practical services in Hiriketiya',
    metaTitle: 'Hiriketiya Practical Guide: Laundry and Everyday Services',
    metaDescription: 'Everyday services in Hiriketiya, from laundry to markets.',
    keyword: 'hiriketiya laundry',
    intro: ['The boring but useful stuff, from people who live here.'],
    tags: ['laundry', 'market'],
    funnel: { headline: 'Planning a longer stay?', cta: 'See long term stays', href: '/hiriketiya-long-term-rental/' },
  },
];

export const getTopic = (slug: string) => topics.find((t) => t.slug === slug);
