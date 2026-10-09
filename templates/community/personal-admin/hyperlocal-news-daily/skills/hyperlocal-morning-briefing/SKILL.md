---
name: hyperlocal-morning-briefing
description: "Use this when someone wants one daily digest of what's new in their town or ZIP code (local news, events today, marketplace deals, garage and estate sales, homes, commercial property, and businesses for sale) pulled from many local sites, institutions, and social platforms into a single read."
---

# Hyperlocal morning briefing

A single morning read that replaces checking a dozen local sites. Built to run for any town. The routine that calls this skill supplies the settings; nothing here is specific to one place, and local institutions are discovered per ZIP, never hardcoded.

## Settings (supplied by the caller)
- `place`: town, state, ZIP, and county.
- `radius`: miles around the ZIP for listings and venues (default 15 to 25). Drop anything outside it.
- `exclude`: places to leave out even if nearby (for example the big metro next door).
- `sources`: which source groups to include, plus town-specific outlets the owner already named (local paper, Community Impact edition, town subreddit, Facebook groups).
- `signed_in`: which login-only platforms (X, Facebook, Facebook Marketplace, Nextdoor, LoopNet) the owner has signed into in the box browser. Only read those.
- `interests`: optional watch terms, price caps, or event types (for example kids' events or car shows).
- `state_dir`: folder for `seen.json` and `sources.md`, for example `/home/box/hyperlocal/<zip>/`.

## First run: discover and record sources
On the first run for a new place, find the working feed or page for each source and save the exact URL and method in `state_dir/sources.md`. Later runs reuse it and only re-discover a source that stops working. Methods that tend to work from the box:
- Community Impact: RSS at `https://communityimpact.com/rss/<edition-slug>/`. The feed mixes in metro stories, so keep only links containing `/<edition-slug>/`.
- Reddit: `https://www.reddit.com/r/<sub>/new/.rss` (the `.json` and old.reddit endpoints are often blocked). Check which town subreddit is actually active.
- City, county, library, and school calendars: look for `.ics` or RSS links on the calendar page (common on CivicPlus/Revize sites). iCal times are often UTC, so convert to local.
- Visitor bureau events: many tourism sites expose `/event/rss/` and need a full browser User-Agent.
- Meeting agendas: the city's Municode Meetings, Granicus, or Legistar page.
- Local newspaper: try RSS, then the section page. Many small papers now redirect to a regional daily; follow the redirect.
- Craigslist: the regional site's search with `postal=<zip>&search_distance=<radius>&sort=date` (`/search/sss` for everything, `/search/zip` for free stuff, `/search/gms` for garage and moving sales). The HTML has no post dates, so rely on `seen.json`.
- Zillow: `curl` `https://www.zillow.com/<town>-<st>-<zip>/` with a normal browser User-Agent and read the `__NEXT_DATA__` listing data (new listings, price cuts, open houses). Realtor.com is a fallback.
- Businesses for sale: BizBuySell often blocks automated reads; BizQuest's county page (`https://www.bizquest.com/businesses-for-sale-in-<county>-county-<st>/`) usually works through WebFetch.
- Commercial property: LoopNet and Crexi usually block automated reads, so read them in the signed-in browser if the owner signed in, otherwise list them under "Couldn't check".
- Eventbrite: `https://www.eventbrite.com/d/<st>--<town>/events--today/`, keeping only events actually located in the area.

## Local institutions discovery (per ZIP, never hardcoded)
Every town has its own mix of venues and organizations, so find them by searching, not from a fixed list. On the first run, and again about once a month, use WebSearch and WebFetch to look for each category below within `radius` (search "<town> <category>", "<county> county <category>", and the nearby in-radius towns). For each real, active institution found, record in `sources.md`: its name, town, category, the best machine-readable feed (ICS, RSS, an events-plugin JSON such as `/wp-json/tribe/events/v1/events`, or an Eventbrite/Ticketmaster organizer page), otherwise its events page URL, and the method that worked. If its events live only on Facebook, note that and read it only when Facebook is signed in. Skip anything outside the radius or in `exclude`, anything that looks closed or hasn't posted in a year, and aggregator spam sites.

Categories to search:
- Chamber of commerce and main street or downtown association (ribbon cuttings, mixers, festivals).
- Public libraries (storytimes, programs, book sales).
- Live music venues, bars and wineries with regular live music, and opry or dance halls.
- Movie theaters (showtimes, special screenings, dollar or summer kids' movies) and drive-ins.
- Community theaters, playhouses, and performing arts centers (season shows and audition calls).
- Rodeos, fairgrounds, county fair and livestock show, and expo or event centers.
- Car shows, cruise nights, and cars-and-coffee meetups.
- Kids and family events: parks and recreation, museums, nature centers, state parks, school district and PTA events, and youth sports signups.
- HOA and neighborhood association calendars for sizable subdivisions in the ZIP (public pages only).
- Garage sales and estate sales: Craigslist garage sales, EstateSales.net (`https://www.estatesales.net/<ST>/<Town>`), EstateSales.org, gsalr.com, and the local paper's classifieds, plus Nextdoor and Facebook if signed in. Keep only sales inside the radius, with dates and address or area.
- Farmers markets, farm stands, and trade days or flea markets (days, hours, seasonal status).
- Also worth a search: churches' and civic clubs' public fundraisers (fish fries, barbecues), historical society and museum events, and the county extension office.

Record the date of the last discovery pass in `sources.md` so later runs know when the monthly refresh is due. On each daily run, read every recorded institution feed along with the other sources.

## Login-only platforms (optional)
X, Facebook groups, Facebook Marketplace, Nextdoor (feed and For Sale & Free), and optionally LoopNet show real content only to signed-in users. They are optional: the briefing works without them. When the owner opts in, hand them the box desktop (request_box_help) with each site's login page open so they sign in themselves; never ask for or handle their password. Logins persist in the box browser, so this is a one-time step per site. On each run a desktop subagent reads these sites **read only**: never post, like, comment, message, make offers, save, or join. For Marketplace, follow the Facebook Marketplace site playbook, sort newest, `daysSinceListed=1`, radius from settings. If a site shows a login wall, captcha, or block, skip it for this run, list it under "Couldn't check", and tell the owner which site needs them to sign in again. Never solve captchas or work around blocks.

## Source groups
1. Local news: newspaper, Community Impact, city and county news, school district news, chamber news.
2. Events today and this week: visitor bureau, city, library, chamber, discovered venues (music, theaters, playhouses, rodeo and fairgrounds, car shows, kids and family, farmers markets, HOA), Eventbrite, and Facebook Events if signed in.
3. Community chatter: town subreddit, plus X, Nextdoor, and Facebook groups if signed in. Keep only posts with real information (closures, safety notices, new businesses, recommendation threads, outages, road work).
4. Stuff for sale: Craigslist, plus Facebook Marketplace and Nextdoor For Sale if signed in. Flag free items, clearly underpriced items, and `interests` matches.
5. Garage and estate sales happening today through the weekend.
6. Homes: new listings, price cuts, and open houses in the ZIP.
7. Commercial property: new for-sale and for-lease listings.
8. Businesses for sale in the county.

## New-only filter
Keep `state_dir/seen.json` with a stable key per item (listing id or URL, article URL, post id, event URL plus date) and the date first seen. Report only unseen items, then add them. Recurring events (weekly trivia, the farmers market) may appear in "Act today" on the day they happen even if seen before, but only once per occurrence. Drop entries older than 60 days. On the first run everything is new, so cap each section at the strongest items.

## Write the briefing
Order by how fast the reader needs to act:
1. Act today: events today, garage and estate sales today, open houses today, and deals likely to go fast.
2. This week: meetings, events, and weekend garage and estate sales coming up.
3. For sale nearby.
4. Homes, then commercial property.
5. Businesses for sale.
6. Local news, one or two sentences each.
7. Around town: useful community posts, summarized.
8. Couldn't check: sources skipped and why.

Every item gets a link. Use only facts actually read from a source; never estimate prices or invent details, and skip listings with placeholder prices like $1. Keep it scannable in about three minutes, and skip empty sections rather than writing "nothing new".
