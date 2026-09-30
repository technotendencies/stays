import type { Stay } from './types';
import { realStays } from './realStays';

/** Every stay on the site. Real stays live in realStays.ts. */
export const stays: Stay[] = realStays;
