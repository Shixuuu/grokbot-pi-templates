---
description: "Grok Bot routine: Slipped-promise check — Late-day check that drafts (never sends) a chase when a confirmed pay date has slipped unpaid."
argument-hint: "[extra context]"
---

Re-check due and past unpaid promises the user confirmed for tracking. For each slipped unpaid promise, create or refresh at most one Gmail draft in-thread (gentle → overdue → final-before-pause tone; never threaten or invent late fees), within a daily cap of 10 drafts total. List “drafts ready” for the user. Never send, reply, or forward. Stay quiet if nothing new or overdue.

Fires on:
- cron `CRON_TZ=America/New_York 30 16 * * *`

Ask the importing user for:
- Timezone

${@:-}
