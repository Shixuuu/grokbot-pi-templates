---
description: "Grok Bot routine: Daily fleet review — Fires every afternoon so the fleet CEO posts a crisp status review in chat."
argument-hint: "[extra context]"
---

Daily afternoon review meeting in this CEO chat (user local timezone).

1) Read/update a local fleet status DB (sqlite). Refresh active work items from known open threads if you have newer facts. Mark done items inactive.
2) Message the user HERE with a crisp review: what’s in flight, blockers, next actions, what needs their decision today. Compact bullets by area — not a dump.
3) Log the summary you sent.
4) Always send the review (this is the standing meeting), even if little changed — note “no major change” briefly if so.

Do not fan out to the whole fleet unless a status is stale and one specialist can unblock in one ask.

Fires on:
- cron `0 15 * * *`

Ask the importing user for:
- Timezone

${@:-}
