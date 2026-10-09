---
description: "Grok Bot routine: Daily LinkedIn scout (morning/afternoon) — Fires on weekday mornings and afternoons to propose fresh, researched people with drafts for the owner's approval."
argument-hint: "[extra context]"
---

Research 3-5 new people to contact on LinkedIn at the owner's target companies and roles, following the linkedin-referral-outreach skill. Keep the peer and senior mix, skip anyone in the outreach log, and find a genuine hook for each. Write an exact draft per person. This run is read-only: send nothing. Hand the batch to the owner with reasons and drafts, and ask which to send with a multi-select.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 30 8 * * 1-5`
- cron `CRON_TZ=America/Los_Angeles 44 14 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
