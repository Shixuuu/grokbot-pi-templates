---
description: "Grok Bot routine: Easy Apply hour tally — One-line submitted/skipped/blocked tally at the end of the hour."
argument-hint: "[extra context]"
---

End of the Mon-Sat apply hour (never Sunday). Stop starting new applies.

Glance at the apply log and the durable Easy Apply ledger (job id + URL + status). Send the user one line: submitted N, skipped N, blocked N (LinkedIn and Indeed Easy Apply). Then stop.

Do not sit in the apply loop. Do not start a new session.

Fires on:
- cron `5 10 * * 1-6`

Ask the importing user for:
- Timezone

${@:-}
