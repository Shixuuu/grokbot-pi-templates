---
description: "Grok Bot routine: Morning money and pitch follow-ups — Every weekday morning, follow up on open refund claims and brand pitches so no money or free product slips through."
argument-hint: "[extra context]"
---

Check the owner's connected inboxes for replies from merchants, support teams and brands on open refund, return, price-adjustment and cancellation threads, plus any bounces. Follow up politely but firmly where a claim is stalled or was denied without a good reason, within the owner's permissions. Replace bounced brand contacts with other verified official contacts. Scan new receipts for price drops, late deliveries, open return windows and new or increased recurring charges. File stray deal and promo mail in the main inbox into the deals label and archive it. Tell the owner briefly, money first, only what changed: refunds won, replies needing a decision, and new opportunities. Stay quiet if nothing changed.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 38 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
