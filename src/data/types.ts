export type LatLng = [number, number];

export type StayType = 'villa' | 'hotel' | 'boutique' | 'guesthouse' | 'hostel' | 'apartment';

/** Categories drive the home chips, collection (SEO) pages and map filters. */
export type Category = 'beachfront' | 'villas' | 'boutique' | 'budget' | 'surf' | 'long-stays' | 'luxury';

export type Amenity =
  | 'pool'
  | 'ac'
  | 'wifi'
  | 'kitchen'
  | 'breakfast'
  | 'surfboards'
  | 'workspace'
  | 'sea-view'
  | 'yoga'
  | 'parking'
  | 'monthly-rates';

export type BookingProvider = 'booking' | 'agoda' | 'airbnb' | 'direct' | 'whatsapp';

export interface Booking {
  provider: BookingProvider;
  url: string;
  /** Affiliate links get rel="sponsored". Direct deals do not. */
  affiliate: boolean;
}

export interface Stay {
  slug: string;
  name: string;
  /**
   * demo:     invented seed listing. "Demo listing" badge, noindex, not in the sitemap.
   * public:   a real place; facts come from its own website and public listings
   *           (see `sources`) but have not been confirmed with the property yet.
   * verified: details confirmed directly with the property.
   */
  status: 'demo' | 'public' | 'verified';
  /** Official website, if the property has one. */
  website?: string;
  /** Where the facts came from, for re-checking later. */
  sources?: string[];
  /** When the facts were last checked, e.g. "September 2026". */
  checked?: string;
  /** true when `image` is the property's own photo (used with permission). */
  ownPhoto?: boolean;
  type: StayType;
  categories: Category[];
  area: string;
  coords: LatLng;
  /** Lowest nightly rate in USD, only when the property states one. */
  priceFrom?: number;
  /** Typical monthly rate in USD, for long stay pages. */
  monthlyFrom?: number;
  bestFor: string[];
  amenities: Amenity[];
  sleeps?: number;
  bedrooms?: number;
  rating?: number;
  summary: string;
  description: string[];
  highlights: string[];
  /** Path in /public (e.g. /images/stays/x.jpg). Falls back to an illustrated placeholder. */
  image?: string;
  /** Hue (0-360) used by the placeholder illustration. */
  hue: number;
  booking?: Booking;
  featured?: boolean;
}

export type PlaceKind = 'beach' | 'surf' | 'restaurant' | 'sight';

export interface Place {
  slug: string;
  name: string;
  kind: PlaceKind;
  coords: LatLng;
  note: string;
  verified: boolean;
}
