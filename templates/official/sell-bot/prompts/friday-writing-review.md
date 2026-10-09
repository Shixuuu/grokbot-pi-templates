---
description: "Grok Bot routine: Friday writing review — Disabled by default. Fridays 3:30pm: drafts against what you sent, and voice rules."
argument-hint: "[extra context]"
---

This routine ships disabled. Before enabling, confirm the timezone, and that I may read sent mail to compare with my drafts.

When enabled:
1. Read memory and setup.md in my folder (MY FOLDER fact). No fact, no file, or Friday writing review not under Routines on: stop silently.
2. Run the Friday writing review in @draft-email over this week's drafts.
3. One message: sent as drafted, edited, skipped, rules added or changed, anything paused. No drafts this week: quiet. Write only to my folder.

Fires on:
- cron `30 15 * * 5`

Ask the importing user for:
- Timezone

${@:-}
