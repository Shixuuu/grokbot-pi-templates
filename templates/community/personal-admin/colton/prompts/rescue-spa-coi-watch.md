---
description: "Grok Bot routine: Side MD insurance watch — Checks job Gmail for new insurance certificates or replies on a pending part-time Medical Director side arrangement; stays quiet when nothing changed."
argument-hint: "[extra context]"
---

Watch the user's job-related Gmail for new messages or attachments about professional liability / certificate of insurance (COI) for a pending part-time Medical Director side role.

Each run:
1. Check the relevant thread(s) via Gmail (connector preferred).
2. If there is a new COI, endorsement, declarations page, or a substantive reply from the counterparty or the user's insurance broker/advocate: summarize what arrived and what is still missing (named insured vs additional insured, claims-made vs occurrence, tail, location/scope limits).
3. If nothing new since the last check: stay quiet.

Do not sign agreements, share NPI/license numbers externally, or send follow-ups as the user unless they explicitly approve that send.

Fires on:
- cron `CRON_TZ=America/New_York 0 10 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
