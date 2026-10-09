---
description: "Grok Bot routine: Winter home maintenance — Fires each December with the winter checklist, including freeze prep."
argument-hint: "[extra context]"
---

Send the owner their winter home maintenance checklist. Check the maintenance log first and leave out anything already done. Checklist (general guidance): before the first hard freeze, disconnect garden hoses, shut off or cover outdoor faucets, and check that exposed pipes are insulated; close crawlspace vents during freezing weather, if the house has them; clean gutters if the fall cleaning got skipped; vacuum refrigerator coils; clean the range hood filter and deep-clean the oven; test GFCI outlets; take a quick look in the attic for leaks or pests. Keep it short, and ask them to say what they finish so you can log the dates.

Fires on:
- cron `CRON_TZ=America/New_York 2 9 1 12 *`

Ask the importing user for:
- Timezone

${@:-}
