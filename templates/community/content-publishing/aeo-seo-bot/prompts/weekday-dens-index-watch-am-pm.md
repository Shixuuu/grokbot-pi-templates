---
description: "Grok Bot routine: Weekday index watch — Weekday morning and afternoon check of whether published pages are indexed, with a ping only when a page is stuck."
argument-hint: "[extra context]"
---

Twice on weekdays, check the published cohort for index coverage and whether each URL is showing in search.

Glance the owner only when something changed: a page newly indexed, a page that hits day 7 still not indexed, or a coverage regression. Stay quiet when the counts match the last watch.

Re-ping the indexing endpoint for URLs that are still not indexed. Do not edit the CMS. Do not invent coverage states. Name the search window the numbers came from.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 1 10,15 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
