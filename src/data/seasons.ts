/**
 * Month-by-month conditions on Sri Lanka's south coast. Qualitative on purpose —
 * used by the weather, surf and best-time guides and by the month funnel.
 */
export interface Month {
  slug: string;
  name: string;
  short: string;
  weather: 'Dry & sunny' | 'Mostly dry' | 'Mixed' | 'Rainy';
  surf: 'Best' | 'Good' | 'Fair' | 'Off-season';
  crowds: 'High' | 'Medium' | 'Low';
  note: string;
}

export const months: Month[] = [
  { slug: 'january', name: 'January', short: 'Jan', weather: 'Dry & sunny', surf: 'Best', crowds: 'High', note: 'Peak season: clean waves, blue skies, busy bay. Book early.' },
  { slug: 'february', name: 'February', short: 'Feb', weather: 'Dry & sunny', surf: 'Best', crowds: 'High', note: 'Arguably the best month — dry, warm and consistent surf.' },
  { slug: 'march', name: 'March', short: 'Mar', weather: 'Dry & sunny', surf: 'Best', crowds: 'Medium', note: 'Still excellent conditions, crowds start to thin.' },
  { slug: 'april', name: 'April', short: 'Apr', weather: 'Mostly dry', surf: 'Good', crowds: 'Medium', note: 'Hot, with afternoon showers creeping in. Good value, Sinhala & Tamil New Year mid-month.' },
  { slug: 'may', name: 'May', short: 'May', weather: 'Rainy', surf: 'Fair', crowds: 'Low', note: 'Southwest monsoon arrives. Quiet, cheap, bigger and messier swell.' },
  { slug: 'june', name: 'June', short: 'Jun', weather: 'Mixed', surf: 'Off-season', crowds: 'Low', note: 'Monsoon season on the south coast — the east coast (Arugam Bay) is in season.' },
  { slug: 'july', name: 'July', short: 'Jul', weather: 'Mixed', surf: 'Off-season', crowds: 'Low', note: 'Showers between sunny spells. Great long-stay deals.' },
  { slug: 'august', name: 'August', short: 'Aug', weather: 'Mixed', surf: 'Off-season', crowds: 'Medium', note: 'European summer holidays bring a small bump in visitors.' },
  { slug: 'september', name: 'September', short: 'Sep', weather: 'Mixed', surf: 'Fair', crowds: 'Low', note: 'Monsoon easing. Quiet bay, sheltered corners can still work.' },
  { slug: 'october', name: 'October', short: 'Oct', weather: 'Rainy', surf: 'Fair', crowds: 'Low', note: 'Inter-monsoon rains. The quietest month of the year.' },
  { slug: 'november', name: 'November', short: 'Nov', weather: 'Mixed', surf: 'Good', crowds: 'Medium', note: 'Season starts. Waves return, prices still reasonable.' },
  { slug: 'december', name: 'December', short: 'Dec', weather: 'Mostly dry', surf: 'Best', crowds: 'High', note: 'Holiday season — best stays sell out, especially Christmas to New Year.' },
];
