# HiriketiyaStays.com

**The easiest way to find where to stay in Hiriketiya.** A mini Booking/Airbnb for one bay, combined with a proper local guide.

Static site built with [Astro](https://astro.build) + [Leaflet](https://leafletjs.com). Every page is prerendered HTML, so it is fast and SEO friendly.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run check    # type check
```

## What's in it

| Part | Where | Notes |
| --- | --- | --- |
| Home (hero, category chips, search, popular stays, map, guides) | `src/pages/index.astro` | |
| All stays + search results (`?checkin=&checkout=&guests=&category=`) | `src/pages/stays/index.astro` | Filters client side; shows the season for the arrival month |
| Stay page | `src/pages/stays/[slug].astro` | Booking CTA, mini map, similar stays, JSON-LD |
| **Hiriketiya Stay Map** | `src/pages/map.astro`, `src/components/StayMap.astro` | Price pins, filters: Beach · Surf · Restaurants · Villas · Hotels · Budget · Luxury |
| SEO landing pages (`/hiriketiya-villas/`, `/cheap-accommodation-hiriketiya/` …) | `src/data/collections.ts` → `src/pages/[collection].astro` | One page per search intent, with map, list, FAQ schema |
| Guides (surf season, weather, vs Mirissa …) | `src/content/guides/*.md` | Every guide has a `funnel` in frontmatter pointing to a stay page |
| For hosts | `src/pages/list-your-property.astro` | Start of the direct deals pipeline |
| **Local guide** (food, sunset, nightlife, work, wellness …) | `src/data/spots.ts` → `/local/` and `/local/<slug>/` | Local picks, budget gems, event nights, last checked, report an update |
| Local topic pages (`/best-breakfast-hiriketiya/`, `/hiriketiya-nightlife/` …) | `src/data/topics.ts` → `src/pages/[collection].astro` | One page per search intent, each ending in a funnel to stays |
| **Hiriketiya Local Map** | `src/pages/map.astro`, `src/components/LocalMap.astro` | Filters combine: Work + Coffee shows places good for both. `?filter=work,coffee` links work |
| Tonight / QR page | `/tonight/`, `/today/` | Event nights by weekday (Sri Lanka time). `/today/` is the target for QR signs |
| Stay finder | `/find-my-stay/` | Five questions, scored in the browser |
| Saved places | `/saved/` | Hearts on stays and spots, stored in the visitor's browser |
| Areas | `src/data/areas.ts` | Bay, Pehebiya, Dikwella, Bathigama, outside Hiri. Shown on the where to stay page |

### The funnel

Guide → "Going in January? See the best surf stays →" → collection page → stay page → booking link.

- Each guide's frontmatter `funnel.collection` decides where it sends readers (top banner + stay cards at the bottom).
- `months: surf | weather` adds the month by month grid, where each month links to the most relevant stays.
- Dates entered in the search bar are remembered and added to the Booking.com / Airbnb / Agoda link on the stay page.

## ⚠️ Before launch

1. **Stays.** `src/data/realStays.ts` has 19 real stays around Hiriketiya, Dikwella and Nilwella (`status: 'public'`): coordinates from OpenStreetMap, facts only from each property's own website or public listings (sources are listed per stay), prices only where the property publishes one. Confirm details with each property, add their own photos as `public/images/stays/<slug>.jpg` (`ownPhoto: true`) and set `status: 'verified'`. Until then they use illustrative photos from `public/images/illustrative/`, labelled as such.
2. **Restaurants on the map are demo entries** (`src/data/places.ts`), and all map coordinates are approximate. Check them on the ground.
3. **Guide facts are drafts** (travel times, seasons, sights). Have someone local review them. The restaurant guide has a TODO for real venues.
4. **Affiliate IDs**: add your Booking.com `aid` / Agoda `cid` in `src/data/site.ts` once approved. Affiliate links get `rel="sponsored"`.
5. **Map tiles** use the public OpenStreetMap server, which is fine for development but not for production traffic. Switch to a tile provider (MapTiler, Stadia, Mapbox …) in `StayMap.astro`.
6. **Photos** are high resolution public domain (CC0) photos from Wikimedia Commons, so no photographer credit is needed. Where a photo names a place (Hikkaduwa, Weligama, Unawatuna, Thiranagama, Arugam Bay, Negombo) it really is that place; the rest are generic tropical shots with alt text that does not claim a location. Sources are listed on `/photo-credits/`. Photos on stays are illustrative until the property provides its own, and are labelled that way. Replace them with each property's own photos (with permission).

## Local guide rules

- Nobody can pay for a place in a list or a higher position. A sponsored spot sets `sponsored: true` and is labelled.
- Recommendations are personal; practical facts are verified. Event days stay marked "check before you go" until `verified: true`. Set `checked` (for example `'October 2026'`) once a spot is confirmed on the ground.
- Spots only appear on the map once `coords` is a confirmed pin. 13 pins come from OpenStreetMap; the rest need pinning on the ground.
- Very short spot pages without a pin are `noindex` until they have more to say.
- Each spot's `toCheck` field is the pre launch checklist (spelling, pins, prices, event days). It is never shown on the site.
- The planned nightclub near ClearPoint is deliberately not listed until its name, owner, opening date and size are officially confirmed.

## Pre launch checklist for the local guide

Run `grep -n "toCheck" src/data/spots.ts` for the full list. The main ones: spelling and pins for every spot, event days for Dots, ClearPoint, Rip Robana, Secret Jungle Party and Lychee Bar, Dikwella Saturday market times and place, Kave Waves buffet price and days, Blue Hole location and safety, and the Pehebiya spelling. Long term rental leads (Noble Nest, Rosie's, L24) and hostels (Bare Foot, Strand, Chill Vibes, Wake n Flow, La Luna) are not listed yet: add them to `realStays.ts` once contact details and permission are confirmed.

## Extra domains

Add each extra domain to Cloudflare (Add a domain, change its nameservers at the registrar), then create a **Redirect Rule** (Rules → Redirect Rules, or Bulk Redirects) with a 301 to the main site:

| Domain | Redirect to |
| --- | --- |
| stayhiriketiya.com | https://hiriketiyastays.com/ |
| hiriketiyarestaurants.com | https://hiriketiyastays.com/best-restaurants-hiriketiya/ |
| surfhiriketiya.com | https://hiriketiyastays.com/hiriketiya-surf-accommodation/ |
| hirihotels.com, hirihotel.com | https://hiriketiyastays.com/hiriketiya-hotels/ |
| hirivillas.com, hirivilla.com | https://hiriketiyastays.com/hiriketiya-villas/ |

## Adding photos

Drop JPGs into `public/images/` with these names and rebuild. No code changes are needed; each slot switches from the illustration to the photo automatically (`src/lib/photos.ts`).

| Slot | File | Size |
| --- | --- | --- |
| Home hero | `images/hero.jpg` (also used behind the Stays page header) | 2400×1400, landscape |
| Area cards | `images/areas/bay.jpg`, `hill.jpg`, `dikwella.jpg` | 1200×1400, portrait |
| Guides page header | `images/sunset.jpg` | 2400×1000 |
| Stay | `images/stays/<stay slug>.jpg` | 1600×1066 |
| Guide | `images/guides/<guide slug>.jpg` | 1600×900 |
| Collection page header | `images/collections/<collection slug>.jpg` | 2400×1000 |

Only use photos you have the rights to (your own, the property's with permission, or an open licence). Keep each file under about 400 KB.

Use high resolution photos only (at least 3000 px wide at the source). For a public domain photo, add an entry to `src/data/photoCredits.json` (alt text, licence, source link); it becomes the alt text and is listed on `/photo-credits/`. Photos under licences that require naming the photographer (CC BY, CC BY-SA) are not used on this site. Remove the entry when you replace a photo with your own.

## Adding a stay

Add an object to `src/data/realStays.ts`, with its sources. Distance to the beach is calculated from `coords`. Pick `categories` carefully: they decide which SEO pages and map filters the stay appears on.

## Adding a guide

Create `src/content/guides/<slug>.md` with the frontmatter fields defined in `src/content.config.ts`. Link naturally to collection pages in the body.
