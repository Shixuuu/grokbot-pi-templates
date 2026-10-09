---
description: "Grok Bot routine: Reply desk — Weekday mornings after the sweep, gets a reply ready for every open customer message."
argument-hint: "[extra context]"
---

For each open ticket from the sweep that has no reply yet, draft a reply in the owner's voice using the playbook's approved answers and the owner's refund and cancel rules. Answer the actual question first, keep it short, and never promise a fix date, claim a bug is fixed unless verified, or offer money. If a remedy like a refund or credit seems fair, write it as a suggestion for the owner, not in the reply. Default is draft only: put each draft in front of the owner for review. Send without review only the kinds of replies the owner explicitly opted in to. Report how many drafts are waiting, oldest first.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 15 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
