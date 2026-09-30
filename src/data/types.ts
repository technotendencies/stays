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
   * false = demo/seed listing. Shown with a "Demo listing" badge until the
   * details (price, amenities, location, photos) have been checked with the property.
   */
  verified: boolean;
  type: StayType;
  categories: Category[];
  area: string;
  coords: LatLng;
  /** Typical lowest nightly rate in USD. */
  priceFrom: number;
  /** Typical monthly rate in USD, for long stay pages. */
  monthlyFrom?: number;
  bestFor: string[];
  amenities: Amenity[];
  sleeps: number;
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
