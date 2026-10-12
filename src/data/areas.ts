import type { Stay } from './types';
import { distanceMeters } from '../lib/stays';

/** Where you stay matters a lot in Hiriketiya. Each stay is placed in one area. */
export interface Area {
  key: 'bay' | 'dikwella' | 'pehebiya' | 'bathigama' | 'outside';
  name: string;
  blurb: string;
}

export const areas: Area[] = [
  { key: 'bay', name: 'Near Hiriketiya Beach', blurb: 'Best if you want everything within walking distance: surf, cafés, sunset and nights out.' },
  { key: 'pehebiya', name: 'Toward Pehebiya', blurb: 'Beach access and a different, calmer atmosphere, a few minutes from the bay.' },
  { key: 'dikwella', name: 'Around Dikwella', blurb: 'More local and often cheaper, on the long beach next door.' },
  { key: 'bathigama', name: 'Toward Bathigama', blurb: 'Quieter, at the western end of Dikwella beach.' },
  { key: 'outside', name: 'Outside Hiri', blurb: 'More space and more villas. A scooter or tuk tuk makes life much easier.' },
];

const HIRIKETIYA_BEACH: [number, number] = [5.9625, 80.7076];

export function areaOf(stay: Stay): Area['key'] {
  const a = stay.area.toLowerCase();
  if (/batigama|bathigama/.test(a)) return 'bathigama';
  if (/pehebiya|pehembiya/.test(a)) return 'pehebiya';
  if (/dikwella|dickwella/.test(a)) return 'dikwella';
  if (/nilwella|blue beach/.test(a)) return 'outside';
  return distanceMeters(stay.coords, HIRIKETIYA_BEACH) <= 650 ? 'bay' : 'outside';
}
