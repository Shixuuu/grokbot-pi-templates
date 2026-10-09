---
description: "Grok Bot routine: Weekday agent attention check — Weekday mid-morning: surface open decisions still blocked on the user across CoS and specialists."
argument-hint: "[extra context]"
---

Check whether anything from CoS / CEO / CFO / Development / Docs still needs the user's attention and has not been addressed yet.

Sources to scan (use whatever is available; don't invent):
1) Open todos and recent chat: decisions, green-lights, logins, approvals asked for and unanswered.
2) Task tracker lists for items blocked on the user.
3) Recent teammate messages waiting on a user call.

Send a short digest of only true blockers. Stay quiet if nothing is waiting.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
