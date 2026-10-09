---
description: "Grok Bot routine: First-touch drafts — Every weekday after the sweep, drafts a personal first message for each qualified lead who has never been contacted."
argument-hint: "[extra context]"
---

Take leads at touch 0 with fit 4 or 5, best first, up to the owner's daily cap. For each, write one short personal message that references something specific and verifiable about them, states the offer plainly, and ends with one easy ask. Emails carry the owner's postal footer address and an opt-out line. In draft-only mode (the default), save each one as a draft in the owner's sending tool or a review list and tell the owner how many are waiting. Only if the owner has opted in to sending and approved the first batch, send through the owner's sending tool, spaced out over the day and within the cap. After each send, set touch number 1, last touch today, next touch due in 3 to 5 business days, and status Contacted. Never resend to a bounced address.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 5 11 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
