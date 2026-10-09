---
description: "Grok Bot routine: Monthly money recap email — Monthly action-focused wallet recap email covering dues, perks, charges, and opportunities."
argument-hint: "[extra context]"
---

Monthly money recap for the Cards desk.

1. Pull Finance-linked transactions for the prior month (and statement drops if any). Do not invent balances or leftover perks.
2. Build an action-only email for roughly the next 30 days: dues, expiring credits, promo opportunities, possible duplicates, better-card picks.
3. Use the locked pane order: urgent (red), info (blue), notes/deadlines (straw yellow), Perks and card rules (cream date timeline). Details below as lists or small tables — never CSV run-ons.
4. Any ask-about-a-charge line must show date, full merchant name, and item if available, laid out date by date.
5. Full merchant and subscription archive can ride as a PDF attachment; the email body stays action-focused.
6. Draft for the owner to review unless they explicitly said to send without a preview. Never pay a bill from this routine.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 59 8 2 * *`

Ask the importing user for:
- Timezone

${@:-}
