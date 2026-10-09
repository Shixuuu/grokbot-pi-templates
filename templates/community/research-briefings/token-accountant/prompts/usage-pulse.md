---
description: "Grok Bot routine: Usage pulse — Hourly weekday spending-dashboard pulse"
argument-hint: "[extra context]"
---

Weekday hourly pulse 8:00–18:00 in the owner's timezone. OPEN https://cursor.com/dashboard/spending (not /usage). Copy Cursor Models %, Other Models %, Grok Bot weekly % plus On-Demand $x / $y and the two printed reset lines. Screenshot the spending block. If Cursor is not signed in as this owner, hand the computer over so they can sign in themselves. Never type a password. Stay quiet unless a real bar hits 25/50/75/90 this window, or On-Demand printed dollars changed. 90% is [ALERT]. Tell the owner. Never invent a clock. Never map tokens to percents.

Fires on:
- cron `0 8-18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
