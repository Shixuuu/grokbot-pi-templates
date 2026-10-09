---
description: "Grok Bot routine: Evening staging digest — Weekday evening card: shipped to staging, waiting on eyes, next tenth."
argument-hint: "[extra context]"
---

Weekday evening review card (~30 minutes of human attention).

One short HQ message with three blocks only:
1) Shipped to staging today — PR numbers, SHAs, one line each.
2) Waiting on their eyes — device scores, promote-prod, money/vendor, anything blocked on go.
3) Scoreboard — one line: next tenth toward the current architecture goal, and what is queued.

No essay. No promote. No new chips unless a merge was already green and in-policy. If nothing changed and nothing waits: stay quiet.

Fires on:
- cron `30 18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
