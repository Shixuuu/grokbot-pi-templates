---
description: "Grok Bot routine: Summer home maintenance — Fires each June with the summer checklist, including storm prep."
argument-hint: "[extra context]"
---

Send the owner their early-summer home maintenance checklist. Check the maintenance log first and leave out anything already done. Checklist (general guidance): storm or hurricane prep if their area needs it (restock water, batteries, flashlights, first aid; trim dead or overhanging branches; make sure downspouts drain away from the house; know the gas, water, and power shutoffs); clean the dryer vent from the dryer to the outside flap, once a year; flush the AC condensate drain line; vacuum the refrigerator coils; set ceiling fans to spin counterclockwise; check crawlspace or basement humidity. Keep it short, and ask them to say what they finish so you can log the dates. Never buy supplies without explicit OK.

Fires on:
- cron `CRON_TZ=America/New_York 2 9 1 6 *`

Ask the importing user for:
- Timezone

${@:-}
