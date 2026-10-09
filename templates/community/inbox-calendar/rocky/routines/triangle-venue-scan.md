# Routine: Local venue scan

> On a set cadence, scan configured local venue calendars for taste matches and offer Google Calendar adds.

Run the local concert watch. Today's date is in the run timestamp; scan {{SCAN_DAYS_AHEAD}} days forward from that date (inclusive). Default 30 if unset.

SETUP FILL-INS (required — read from profile memory; if missing, ask once then stop):
- {{TASTE_PROFILE}} — genres + example artists
- {{METRO_REGION}} — city/region for locality checks
- {{VENUE_WATCH_LIST}} — venue names (calendar URLs optional). If empty / user doesn't know the local scene, run nearby venue discovery first (research rooms that book their taste at their preferred size, shortlist, recommend via question widget, then lock the list). If a venue has no saved scrape recipe yet, discover the official calendar and working feed yourself before asking the user.

EFFICIENCY RULE: Prefer direct API / network requests over browser UI clicking. Do NOT use browser automation for calendars that already have a known API or a curl-friendly HTML source. If a venue still needs discovery, capture its network/API endpoint once, save the recipe in log memory, then reuse that path.

Nearby venue discovery (when watch list is empty):
1. Using {{METRO_REGION}}, {{TASTE_PROFILE}}, and preferred venue size, find rooms that book that taste.
2. Prefer the size they asked for; skip oversized rooms (e.g. amphitheaters) when they want clubs.
3. Shortlist with capacity / booking-lane notes; skip thin calendars and clear taste mismatches.
4. Offer additions via a question widget (multiSelect); persist picks as the watch list.
5. Then run venue calendar discovery for each pick.

Venue calendar discovery (when only a name is known):
1. Search for the official site in {{METRO_REGION}}.
2. Find events/shows/calendar pages (including hash-route SPAs and embedded widgets).
3. Prefer official/ticket feeds; try tribe REST, Venuepilot GraphQL, JSON-LD, FullCalendar embeds, Live Nation/Ticketmaster, then Eventbrite as supplement.
4. Save the working recipe in log memory.
5. Only ask the user for a calendar URL or tip after a concrete attempt fails — say what you tried.

For each venue in {{VENUE_WATCH_LIST}}:
- Prefer the saved scrape recipe if present.
- Else run venue calendar discovery, then pull the window.
- Skip karaoke, open mics/jams, club/DJ nights, comedy, and music festivals / festival-branded nights.

Taste: score against {{TASTE_PROFILE}}. Original bands preferred. Cover/tribute only if a really strong fit. Festivals are out of scope.

Workflow:
- Read the evaluated-show cache ({{EVALUATED_SHOWS_CACHE}}). Do not re-research a date+venue+headliner already in that file.
- Identify lineup, start with the headliner. For genre ID on obscure/local/thin acts, follow Venue show genre ID (full search order + name-collision checks using {{METRO_REGION}}). If the headliner is clearly not a fit from a reliable hit, skip the rest of the bill. If still no usable genre after the full search, skip and cache — do not dump unknowns as homework.
- Write new evaluations and merge them into that evaluated cache.
- Persist newly discovered venue API endpoints in agent log memory.
- Google Calendar: do not add events unless the user asks. When creating concert events, set colorId to "11" (tomato) or the user's preferred concert color.

Tell the user in chat when:
1. You find a real match — date, venue, lineup, why it fits, doors/show time, ticket link. ALWAYS offer the calendar add via a question widget with button options (not plain-text yes/no). For multiple matches, use multiSelect. Include a skip/none option.
2. A venue site failed, looked incomplete, needed a workaround, or might silently miss shows. Never fail quietly. Ask for a calendar URL only when discovery failed.

If every venue scraped cleanly and there are no new matches, stay quiet.

Schedule: {{SCAN_CRON}} (default 1st and 15th at 9am local). If a full scan finished less than {{QUIET_DAYS}} days ago (default 12) and no scrape is known broken, stay quiet.

Fires on:
- cron `0 9 1,15 * *`

Ask the importing user for:
- Timezone
