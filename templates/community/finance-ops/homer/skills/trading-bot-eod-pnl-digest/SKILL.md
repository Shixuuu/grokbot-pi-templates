---
name: trading-bot-eod-pnl-digest
description: "Use this at end of session for the day’s paper PnL and cash-settlement summary."
---

# Trading bot EOD PnL digest

## Goal
Produce an end-of-day digest from the local bot journal and cash-account simulation.

## Steps
1. Open `data/trades.db`.
2. Summarize today’s closed trades: count, wins/losses, realized PnL.
3. Read cash_account settled/unsettled/open debit.
4. Send a short digest. No secrets. Do not invent fills.

## Do not
- Treat large broker paper equity as the trading bankroll when a simulated cash account exists
