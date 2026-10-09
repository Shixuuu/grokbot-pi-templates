---
description: "Grok Bot routine: Weekday job shortlist — Weekday morning high-signal role shortlist for the owner's chosen targets; quiet if nothing new."
argument-hint: "[extra context]"
---

Weekdays only. Search for roles matching the owner's remembered targets, locations, seniority, compensation floor, and skip list. Message a SHORT high-signal shortlist: company, title, link, why it fits, weak-fit or visa flags. Do not apply or email. If nothing new vs last run after a real search, stay quiet. Prefer guest-apply boards when noting apply path.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
