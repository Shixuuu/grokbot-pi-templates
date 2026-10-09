---
description: "Grok Bot routine: Genealogy check-in — Twice a day, checks the genealogy status file and picks up the next offline or allowed task so research never stalls, staying quiet when nothing changed."
argument-hint: "[extra context]"
---

Read the genealogy status file first. If a browser job is listed as running, don't start another browser job. If the status file looks stale, reconcile it from the batch logs and rewrite the 'running now' block. Otherwise pick the next highest-value item: offline work on saved files comes first, and the browser only within the daily session budget and site-pace rules. Add one line to the research log. Message the owner only when there's a new verified finding or something they need to act on; otherwise stay silent.

Fires on:
- cron `CRON_TZ=America/New_York 14 7,13 * * *`

Ask the importing user for:
- Timezone

${@:-}
