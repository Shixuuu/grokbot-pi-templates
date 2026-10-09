---
description: "Grok Bot routine: Sales inbox morning check — Weekday morning scan of the sales inbox via the lead-finder bot; ping the owner only when something needs action."
argument-hint: "[extra context]"
---

Weekday start-of-day sales inbox check for the owner.

Intent:
1) Message the lead-finder teammate to scan the configured sales mailbox for new or unread mail since the last check — buyer replies, bounces, stops, PO or sample asks.
2) That teammate reports back; they must NOT send email unless the owner explicitly said send.
3) Tell the owner a short digest only when actionable: who wrote, one-line gist, suggested next action.
4) If nothing actionable, stay quiet (no filler empty-inbox ping).
5) Keep usage light — no full site work on this run.

Hard rules still apply: never impersonate send; respect holds and do-not-resend lists the owner configured.

Fires on:
- cron `CRON_TZ=America/Chicago 0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
