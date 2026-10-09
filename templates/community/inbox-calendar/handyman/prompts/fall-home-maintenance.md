---
description: "Grok Bot routine: Fall home maintenance — Fires each October with the fall checklist and a prompt to schedule the heating tune-up."
argument-hint: "[extra context]"
---

Send the owner their fall home maintenance checklist. Check the maintenance log first and leave out anything already done this fall. Checklist (general guidance): schedule the fall heating tune-up with their HVAC company, if they have one saved (never book without explicit OK); test smoke and carbon monoxide detectors and change batteries; set ceiling fans to spin clockwise; check weatherstripping and caulk around doors and windows; plan gutter cleaning for after the leaves drop; if there's a fireplace or chimney, get it inspected before first use. Keep it short, and ask them to say what they finish so you can log the dates.

Fires on:
- cron `CRON_TZ=America/New_York 2 9 1 10 *`

Ask the importing user for:
- Timezone

${@:-}
