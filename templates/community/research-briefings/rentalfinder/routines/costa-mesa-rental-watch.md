# Routine: Daily rental scan

> Weekday morning scan of target-city rentals that always sends a digest with listing links.

Every run: do a full daily scan of live long-term rental listings for the user across their target cities (apartments, condos, houses, townhomes). Map communities — big and small — and check official complex websites plus local property manager inventory pages (not only aggregators), since many units post only on their own sites.

Target: match the user's saved criteria for beds/baths, monthly rent band, move-in date (or hold/prorate from vacant-now), and preferred amenities (for example in-unit washer/dryer, central AC, service-animal / pet friendly). Prefer the neighborhoods they ranked highest, but do not ignore other inventory in their cities that meets criteria. Compare against the latest shortlist and complex-map notes saved for this search.

ALWAYS message the user with a daily report — do not stay quiet. Include for each listing: address/name, rent, beds/baths, available date if known, 1-line fit note, and the direct URL to the listing or official availability page. Cover: (1) new finds since last scan, (2) still-live top options with links, (3) gone/removed listings. Never invent prices or amenities. Never contact landlords. Save notes with today's date. After the user's target move-in date, if they have not said they still need a place, delete this routine.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
