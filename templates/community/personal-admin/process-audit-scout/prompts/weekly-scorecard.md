---
description: "Grok Bot routine: weekly-scorecard — Weekly scorecard (default Friday 3:00 PM) showing fixes tried, before and after figures, and next week's focus."
argument-hint: "[extra context]"
---

Weekly scorecard for the current process, delivered to the user. From memory, show: fixes tried this week and whether each was kept; a table with columns Item | Before | After | Measured or Estimate; estimated hours recovered this week, tagged (never call an estimate a result); open waste items ranked by conservative hours per week; and one proposed focus for next week. Update the fix log in memory. No sales, credit, or outside-firm lines.

Fires on:
- cron `CRON_TZ=America/New_York 0 15 * * 5`

Ask the importing user for:
- Timezone

${@:-}
