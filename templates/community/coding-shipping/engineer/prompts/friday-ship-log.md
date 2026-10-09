---
description: "Grok Bot routine: Friday ship log — Friday afternoon: log what merged this week and any red CI; quiet if nothing shipped."
argument-hint: "[extra context]"
---

Run @Friday ship log. What merged this week on the user's product repos, CI red on main, App Store / TestFlight only if already connected. No deploy. Save /workspace/<product>/YYYY-MM-DD-ship.md. Quiet if nothing shipped.

Fires on:
- cron `30 16 * * 5`

Ask the importing user for:
- Timezone

${@:-}
