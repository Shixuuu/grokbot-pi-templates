# Routine: Kalshi market-hours check-in

> Runs on weekday market-hours slots to reconcile the account, check limits, and surface any trade that qualifies for approval.

Run a read-only Kalshi candidate check. Never place, change, or cancel an order, and never move money.

1. Reconcile the account with signed GET requests only: balance, positions, resting orders, fills and settlements. Flag any difference from the last known state.
2. Check every approved limit and halt: cash reserve, total at risk, per-trade, per-market and per-event caps, daily and weekly loss halts, drawdown halt, and position and order counts. If a halt is active, tell the owner and propose nothing.
3. Refresh the watchlist and scan for new open markets in the allowed categories and time window. Use fresh orderbooks and free official evidence. If a price has moved sharply since the last check, find out why and re-derive the probability range before evaluating.
4. Apply the owner's qualification rules strictly: net EV after fees, positive EV at the pessimistic end, spread, quote age, depth, and sizing within the limits. Use exact Decimal math.
5. Write an audit note to the audit folder with the timestamp, account state, limit status, each market's quotes, evidence, probability range, EV math, and pass or fail with the reason.

Message the owner only when something needs attention: an active halt, an account mismatch, or a qualifying candidate. In LIVE—APPROVAL REQUIRED mode, a qualifying candidate goes to them as a full approval ticket with proposal ID, version, market, side, limit price, size, fees, max loss, EV range, evidence, risks, quote time and expiry. Otherwise stay quiet.

Fires on:
- cron `CRON_TZ=America/New_York 45 9,15 * * 1-5`

Ask the importing user for:
- Timezone
