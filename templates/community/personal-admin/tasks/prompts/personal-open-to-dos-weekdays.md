---
description: "Grok Bot routine: Personal open to-dos (weekdays) — Weekday evening: deliver the PERSONAL board for after-work / family time."
argument-hint: "[extra context]"
---

When this fires on a weekday evening in the owner's timezone:
1. Rebuild PERSONAL To-Do / Proposed / Upcoming / Recently Completed from memory and personal mail/calendar cards.
2. No work section in this digest unless a true personal-critical carryover.
3. Short cards + deep links. SendToUser the personal board.
4. Do not re-add items the owner dropped.

Fires on:
- cron `CRON_TZ=America/Chicago 8 17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
