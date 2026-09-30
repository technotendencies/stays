import fs from 'node:fs';
import path from 'node:path';
import credits from '../data/photoCredits.json';

/**
 * Photos live in /public/images. Components ask for a photo by path and fall back
 * to the illustrated ocean artwork until the file exists, so photos can be added
 * one at a time without touching code.
 */
export function photo(p?: string): string | undefined {
  if (!p) return undefined;
  return fs.existsSync(path.join(process.cwd(), 'public', p)) ? p : undefined;
}

export interface PhotoCredit {
  /** What the photo actually shows, used as alt text. */
  alt: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

const creditMap = credits as Record<string, PhotoCredit>;

/** Description, licence and source for a photo in /public/images, if it came from an open source. */
export const photoCredit = (p?: string): PhotoCredit | undefined => (p ? creditMap[p] : undefined);

export const allPhotoCredits = () => Object.entries(creditMap).map(([src, c]) => ({ src, ...c }));

export const sitePhotos = {
  hero: '/images/hero.jpg',
  surf: '/images/surf.jpg',
  sunset: '/images/sunset.jpg',
  areas: {
    bay: '/images/areas/bay.jpg',
    hill: '/images/areas/hill.jpg',
    dikwella: '/images/areas/dikwella.jpg',
  },
};

export const stayPhoto = (slug: string, explicit?: string) => photo(explicit) ?? photo(`/images/stays/${slug}.jpg`);
export const guidePhoto = (slug: string) => photo(`/images/guides/${slug}.jpg`);
