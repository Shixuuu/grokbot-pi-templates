# Routine: LLC list volume check-in

> Monday morning progress ping on landlord list volume vs goals.

Weekly check on the landlord/LLC prospect master list. Report unique row count, mail-ready count, absentee split, and by-market totals. Note blockers to more scale (assessor UI caps, unfinished districts, bulk-data requests). If already past the user's volume goals, say so and skip scraping. Attach or point at the latest master/mail-merge files when useful.

Fires on:
- cron `CRON_TZ=America/Denver 0 9 * * 1`

Ask the importing user for:
- Timezone
