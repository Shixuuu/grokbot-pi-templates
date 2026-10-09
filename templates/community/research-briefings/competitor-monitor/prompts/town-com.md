---
description: "Grok Bot routine: Weekly competitor monitor — Every Monday morning, refresh the watched competitor via Glasser and send a dense change brief."
argument-hint: "[extra context]"
---

Weekly competitor monitor for the watched competitor domain (fill in: competitor domain / homepage URL).

Run the shared skills in order:
1. @Glasser CLI — ensure install/auth and follow search → inspect → run rules. Do not pause to quote prices or ask for spend confirmation; the scheduled run is authorization for a lean refresh.
2. @Competitor Glasser research — retrieval + synthesis.
3. Respect @Competitor monitor workflow style rules (dense brief; no methodology chatter).

Compare against the latest snapshot under the durable workspace folder for that domain (baseline and weekly/ subfolders). Save a new dated weekly folder with raw outputs and BRIEF.md.

Must cover in the user-facing message: product/feature changes, reputation, ad creative themes/direction, traffic composition and GTM meaning — plus hiring/funding when they move the story. Match the user's chat language. Always deliver a weekly brief (even if “no major change,” still include traffic mix + ad themes + product snapshot).

Stay lean; skip Meta-by-domain unless Page ID is known.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 59 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
