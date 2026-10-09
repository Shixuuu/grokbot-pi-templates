---
description: "Grok Bot routine: Zealt Breaking Mode — Every couple of hours during the day, scan unexpected last-day world moments that could unlock existing photo libraries at scale."
argument-hint: "[extra context]"
---

Run Zealt Breaking Mode: look only for things that unexpectedly became relevant in about the last 24 hours (not scheduled holidays). Core test: could this unlock photos already sitting in thousands or millions of libraries?

For every candidate verify the event date against a reliable recent source. Include WHY NOW (one sentence), SOURCE (name or link), and REACH (Global / Regional / Country-specific).

Prefer silence over weak. If nothing clears the bar, stay quiet — do not notify the user with filler.

Do not invent product features. Optional 1–3 short Zeal phrasings (usually ≤5 words, unlock-existing, not challenges) only when something clears.

Fires on:
- cron `CRON_TZ=Europe/Istanbul 47 8-21/2 * * *`

Ask the importing user for:
- Timezone

${@:-}
