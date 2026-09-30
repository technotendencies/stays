// Lucide icons (ISC), inlined at build time as raw SVG strings.
import umbrella from 'lucide-static/icons/umbrella.svg?raw';
import house from 'lucide-static/icons/house.svg?raw';
import sparkles from 'lucide-static/icons/sparkles.svg?raw';
import wallet from 'lucide-static/icons/wallet.svg?raw';
import waves from 'lucide-static/icons/waves.svg?raw';
import calendar from 'lucide-static/icons/calendar-days.svg?raw';
import mapPin from 'lucide-static/icons/map-pin.svg?raw';
import utensils from 'lucide-static/icons/utensils.svg?raw';
import palmtree from 'lucide-static/icons/palmtree.svg?raw';
import sun from 'lucide-static/icons/sun.svg?raw';
import star from 'lucide-static/icons/star.svg?raw';
import arrowRight from 'lucide-static/icons/arrow-right.svg?raw';
import check from 'lucide-static/icons/check.svg?raw';
import bed from 'lucide-static/icons/bed-double.svg?raw';
import users from 'lucide-static/icons/users.svg?raw';
import gem from 'lucide-static/icons/gem.svg?raw';
import map from 'lucide-static/icons/map.svg?raw';
import thermometer from 'lucide-static/icons/thermometer-sun.svg?raw';
import plane from 'lucide-static/icons/plane-landing.svg?raw';
import footprints from 'lucide-static/icons/footprints.svg?raw';

const raw = {
  umbrella,
  house,
  sparkles,
  wallet,
  waves,
  calendar,
  mapPin,
  utensils,
  palmtree,
  sun,
  star,
  arrowRight,
  check,
  bed,
  users,
  gem,
  map,
  thermometer,
  plane,
  footprints,
};

export type IconName = keyof typeof raw;

/** Returns the SVG markup, stripped of the license comment and sized/classed for inline use. */
export function icon(name: IconName, size = 18): string {
  return raw[name]
    .replace(/<!--.*?-->\s*/s, '')
    .replace(/\swidth="24"/, ` width="${size}"`)
    .replace(/\sheight="24"/, ` height="${size}"`)
    .replace('<svg', '<svg aria-hidden="true" focusable="false"');
}
