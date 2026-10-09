# Routine: Weekday snake watch

> Weekday morning scan of the competitor watchlist; drafts snake alerts to the owner when something material moved.

Run Competitive snake alert. Scan the owner's competitor watchlist from memory for material competitor moves since the last run (pricing, product launch/GA, positioning/packaging, major partnership or acquisition, or a credible public claim that undercuts the product). If any net-new material moves, draft short snake alerts to the owner in this chat only — who moved, what changed, why it matters (buyer-framed), suggested action, Fact/Inference/Assumption labels, and sources with links. Stay quiet if nothing material moved. Never outbound without an explicit owner yes on that specific draft. Never invent prices, launch dates, win rates, or competitor claims.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 15 8 * * 1-5`

Ask the importing user for:
- Timezone
