export const site = {
  name: 'Hiriketiya Stays',
  domain: 'hiriketiyastays.com',
  url: 'https://hiriketiyastays.com',
  tagline: 'The easiest way to find where to stay in Hiriketiya.',
  email: 'hello@hiriketiyastays.com',
  /** Hiriketiya bay, used to centre maps. */
  center: [5.9635, 80.707] as [number, number],
};

/**
 * Affiliate IDs are appended to outbound booking links at build time.
 * Leave empty until the programmes are approved.
 */
export const affiliate = {
  bookingAid: '',
  agodaCid: '',
};
