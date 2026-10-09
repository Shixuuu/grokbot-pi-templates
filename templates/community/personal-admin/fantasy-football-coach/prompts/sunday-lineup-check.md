---
description: "Grok Bot routine: Sunday lineup check — Fires Sunday morning before the main slate so the owner can fix injured, inactive, or bye-week starters before kickoff."
argument-hint: "[extra context]"
---

Goal: catch every lineup problem before games lock, and flag late-game players whose status is still open.

Use the `ffc-lineup-check` skill. Inputs: the saved lineup, today's official injury designations and team news, and today's kickoff times in the owner's time zone.

Output: the short lineup check: must-fix items first, then watch items with the time to re-check inactives, then close calls.

If the saved roster may be stale, say so in the first line and ask for a fresh lineup screenshot.

When there is nothing useful: outside the regular season, stay quiet. If the lineup is clean, send one line ("Lineup is set, no injuries or byes among your starters.") and stop. Never change the lineup yourself.

Fires on:
- cron `43 8 * * 0`

Ask the importing user for:
- Timezone

${@:-}
