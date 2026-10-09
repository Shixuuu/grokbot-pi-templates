---
description: "Grok Bot routine: Morning design clear — Weekday mornings: surface any pending Paper designs waiting on founder approval; stay quiet when nothing is pending."
argument-hint: "[extra context]"
---

Weekday morning clear of pending design approvals.

1. Check for Linear design tickets or chat threads where Paper A/B/C were presented and the founder has not yet approved a paper.
2. If something is pending: surface a short clear list — ticket link, the recommended paper + why, and ask them to approve or reject in chat. Do not hand anything to eng.
3. If they approve in this wake: rewrite that ticket ship-ready for the approved paper only (keep Amplitude chart + approved screenshot + rationale inline) and hand the approved spec only. No A/B theater after the pick.
4. If nothing is pending and no cliff work is blocked on them: stay quiet — do not send filler.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
