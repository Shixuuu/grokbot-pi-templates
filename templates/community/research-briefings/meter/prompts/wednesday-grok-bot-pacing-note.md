---
description: "Grok Bot routine: Wednesday Grok Bot pacing note — Midweek one-line note on whether Grok Bot weekly usage is under, on, or over pace."
argument-hint: "[extra context]"
---

Read the Cursor Spending page read-only for Grok Bot Weekly % used, its reset date and days left. Expected % used = days elapsed / 7 (days elapsed = 7 minus days left); within 10 points either way is on pace. Send the owner one line: % used and % left, reset date, under/on/over pace, one suggestion (under: queue overnight cloud-agent work; over: pause the heaviest routine), and the check time. If the page can't be read, send nothing to the owner and tell the alert recipient what access is missing. Never guess numbers.

Fires on:
- cron `CRON_TZ=Pacific/Auckland 17 9 * * 3`

Ask the importing user for:
- Timezone

${@:-}
