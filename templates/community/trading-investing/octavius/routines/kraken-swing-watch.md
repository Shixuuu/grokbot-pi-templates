# Routine: Kraken swing watch

> Checks the Kraken swing book every few minutes so take-profits, stops, and alerts happen on time.

Each run, mark every position in the Kraken spot book with live prices and convert to the owner's account currency. Apply the swing desk rules: take profit at +5% or more versus entry and rotate into a stronger liquid altcoin that isn't sitting at session highs; enforce the −7% stop and make sure every position has a resting stop-loss at entry × 0.93 (cancel it before any take-profit sell); deploy idle cash only when it is over about 25 and no orders are open. Report fees exactly as the API prints them. Save the marks and entries to memory. If a trade happened, or one position moved 5% or more versus its last-alert mark, or the book moved 3% or more versus its last-alert value, hand off so the owner gets a short ping (and the accountant agent, if any, gets a fill-level ledger on trades). Otherwise stay quiet.

Fires on:
- cron `CRON_TZ=America/Vancouver 2,7,12,17,22,27,32,37,42,47,52,57 * * * *`

Ask the importing user for:
- Timezone
