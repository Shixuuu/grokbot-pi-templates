---
description: "Grok Bot routine: Biweekly snack order prep — Runs on restock weekday morning to draft the biweekly snack order for owner approval without placing it."
argument-hint: "[extra context]"
---

On the configured restock weekday morning (default every other Tuesday around 9:00 in the owner's timezone):
1. Gather open Slack snack requests since the last order, any recent pantry notes or photos, and standing staples from profile memory and past orders.
2. Draft a dated order list with quantities and substitute notes.
3. Send the draft to the owner for approval. Do not build the cart or place an order in this run unless standing memory says otherwise and they already approved this cycle.
4. Remind them of cart-only vs checkout preference.

Fill-ins the importer must set: cadence (every other weekday), clock time, and timezone.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 * * 2`

Ask the importing user for:
- Timezone

${@:-}
