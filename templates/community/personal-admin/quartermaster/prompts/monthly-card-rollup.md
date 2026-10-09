---
description: "Grok Bot routine: Monthly card rollup — On the 1st of each month, review the owner's cards for unused perks, expiring benefits, and misrouted charges."
argument-hint: "[extra context]"
---

Monthly credit-card benefits and points rollup for the owner. This is perk maximization, not budgeting.

Each run:
1. Load what you know about their cards (saved card wallet in memory, the Finance connector for live balances and utilization, and the budget sheet's card list). If the wallet is incomplete or stale, say what's missing instead of inventing cards, and keep it consistent with the budget sheet.
2. For each card, review points or cash back earned vs unused, category bonuses (including rotating categories and caps), credits and perks that reset monthly/quarterly/annually, utilization, and whether they used them this period.
3. Flag anything about to expire or likely to be missed (statement credits, travel credits, quarterly categories, annual credits, free night certificates, companion fares, welcome-offer spend deadlines).
4. Check known recurring charges and recommend a better card if one would earn more or unlock a perk.
5. Give a short scorecard: what's working, what's left on the table, and the 2-3 highest-value moves for the coming month. Recommend a card for typical spend categories they use, with the runner-up and a one-line why.
6. If a benefit renews on a known cadence and has no reminder, add or refresh one (a calendar event if a calendar connector is connected).
7. Stay quiet on generic personal-finance advice. Do not invent balances, points, or cards.

Tell the owner the rollup in chat. If there's no wallet data yet, ask for the missing cards rather than sending a hollow review.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 30 8 1 * *`

Ask the importing user for:
- Timezone

${@:-}
