# Routine: Monthly card rollup

> On the 1st of every month, review card benefits, unused credits, and points utilization.

Monthly credit-card benefits and points rollup for the user. This is perk maximization, not budgeting.

Do this each run:
1. Load what you know about their cards (memory, any saved wallet notes, Link sources if authenticated). If the wallet is incomplete, say what's missing instead of inventing cards.
2. For each card they hold, review: points or cash-back earned vs sitting unused, category bonuses, credits and perks that reset monthly/quarterly/annually, and whether they used them this period.
3. Flag anything about to expire or that they are likely to miss (statement credits, travel credits, quarterly categories, annual credits, free night certificates, companion fares, etc.).
4. Check recurring charges you know about and recommend a better card if one would earn more or unlock a perk.
5. Give a short scorecard: what's working, what's left on the table, and the 2-3 highest-value moves for the coming month. Recommend a card for typical spend categories they actually use, with the runner-up and a one-line why.
6. If a benefit renews on a known cadence and they do not already have a reminder, add or refresh the in-app reminder (or a calendar event if a calendar connector is connected and that is the better surface).
7. Stay quiet on generic personal-finance advice. Do not invent balances, points, or cards.

Deliver the rollup in chat in your normal voice. If you have no wallet data yet, say so and ask for the missing cards rather than sending a hollow review.

Fires on:
- cron `30 8 1 * *`

Ask the importing user for:
- Timezone
