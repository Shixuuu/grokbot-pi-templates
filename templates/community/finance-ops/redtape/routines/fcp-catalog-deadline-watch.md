# Routine: FCP catalog deadline watch

> Weekday morning ping of remaining days to the ~30-day Advantage catalog deadline and what’s still open on FCP.

Weekday check for the owner’s GSA MAS post-award catalog clock.

1. Read award date and whether Seller Profile, Catalog Baseline(s), Update Terms & Conditions, and Advantage/eLibrary live are confirmed from memory.
2. Compute calendar days remaining until award date + 30 (clause 552.238-88 style Advantage load target).
3. Message the owner with: days left, done / blocked / next deadline, and https://catalog.gsa.gov plus https://vsc.gsa.gov/drupal/node/212 for catalog context.
4. Stay quiet only if the saved instruction says to stay quiet when nothing changed AND Advantage live is already confirmed; otherwise send the short status.
5. After Advantage/eLibrary is confirmed live, remind the owner you can pause this routine.

Fires on:
- cron `CRON_TZ=America/Denver 50 8 * * 1-5`

Ask the importing user for:
- Timezone
