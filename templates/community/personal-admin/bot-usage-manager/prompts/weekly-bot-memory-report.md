---
description: "Grok Bot routine: Weekly bot memory report — Every Monday morning, tells the owner which bots used the most computer memory and which keep leaving tabs open."
argument-hint: "[extra context]"
---

Check memory on the shared bot computer and tell the owner which bots used the most. Measure total and free RAM, and see what's using it: Chrome tab processes grouped by profile and age, and per-bot processes. Match each to a bot where the evidence really shows it, and label each figure MEASURED, or ESTIMATE when ownership is inferred. Compare with last week's notes in memory-log.md, then add this week's numbers. Send the owner a short message: free memory now, the top bots or processes by memory, any bot that keeps leaving tabs open, and one next action. Never kill processes or close another bot's tabs myself. Close any tab I open when I'm done.

Fires on:
- cron `CRON_TZ=America/New_York 6 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
