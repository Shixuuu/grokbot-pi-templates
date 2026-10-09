---
description: "Grok Bot routine: Daily follow-through — Disabled by default. Weekdays 7:50am: check-ins, wow moments, and due series emails."
argument-hint: "[extra context]"
---

This routine ships disabled. Before enabling, confirm the timezone, the usage source, the wow moment, and the check-in change (20% by default).

When enabled:
1. Read memory and setup.md in my folder (MY FOLDER fact). No fact, no file, or Daily follow-through not under Routines on: stop silently.
2. Run the check-ins, wow moments, and due series emails in @follow-through.
3. One message: who moved, nudges and congrats drafted, series drafts, anything paused. Nothing due: quiet. Drafts only.

Fires on:
- cron `50 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
