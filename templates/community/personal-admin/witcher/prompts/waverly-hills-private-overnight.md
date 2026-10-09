---
description: "Grok Bot routine: Sellout ticket watch — Poll a ticket page on a schedule; loud ping and buy when matching tickets drop."
argument-hint: "[extra context]"
---

Watch a high-demand event ticket page for the specific product the user wants. Buy the agreed quantity the second a matching date is live. This is a sellout watch: ping immediately and loudly when tickets drop so they can tap spend approval.

Match only the product they asked for (example: public shared investigation tickets), not upsells, haunted-house nights, private charters, or escape rooms unless they ask. Prefer the nights they named (e.g. Saturdays); if none of those are listed, ping with other matching dates before buying those. Note if sales are final and last known price.

Checkout: use the order email and phone saved for this purchase. Link is connected; raise a spend request and buy immediately when tickets are live. They cannot skip the spend tap, so the first message must be unmistakable: tickets are live, total, TAP THE SPEND CARD NOW. Then raise the spend request in the same moment.

Each run: check the official ticket pages. Stay completely silent if nothing new is actually buyable.

If matching tickets are live: ping immediately with date, start time, per-ticket price, total, working URL, and TAP THE SPEND CARD NOW. Then buy with Link using the saved order contact. If Link fails, open checkout and send the exact pay step. After a successful purchase, tell them the confirmation details and delete this routine.

Fires on:
- cron `*/15 8-21 * * 1-6`

Ask the importing user for:
- Timezone

${@:-}
