---
description: "Grok Bot routine: Noah's Ark & biblical archaeology watch — Checks for major Noah’s Ark or biblical archaeology findings; alerts only when genuinely new."
argument-hint: "[extra context]"
---

Run the Noah’s Ark / major biblical archaeology watch.

Search recent web for genuinely new findings related to Noah’s Ark claims, Durupınar-style fieldwork, or other major biblical archaeology announcements that matter to Bible/Christianity readers.

Ping only on material that is new since the last alert. Separate promotional headlines from lab-confirmed results (e.g. radiocarbon still pending).
Do not invent quotes from any teacher channel.
If nothing new, stay quiet.
Respect quiet hours if configured.

Fires on:
- cron `CRON_TZ=America/Chicago 46 9,15 * * *`

Ask the importing user for:
- Timezone

${@:-}
