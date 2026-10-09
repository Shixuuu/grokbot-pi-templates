# Routine: Coinbase portfolio watch

> Twice-daily autopilot check that runs trades, stops, rotation, and macro risk defense — stays quiet when nothing material changed.

FULL TRADE AUTOPILOT on the user's isolated Coinbase Advanced Trade agent portfolio (portfolio id is a fill-in). Runs daily at 9am and 4pm local time including weekends for vol/event risk.

Use the Coinbase CLI (Node 22 + coinbase on PATH).

Each run:
1) Portfolio health: balances, open orders, prices for current holdings + BTC-USD. Ensure ~13% stop-limits match residual sizes; fix if missing.
2) MARKET OUTLOOK / EVENT RISK: quick scan for known near-term catalysts that could cause sharp downside — FOMC/CPI/Fed speakers, major crypto unlocks, exchange/hack/regulatory shocks, BTC breaking down. Use web search lightly plus BTC/alt candles from CLI.
3) DEFENSIVE PLAYBOOK if a major downside event is imminent (next ~24–48h) or clearly underway: flip BTC cash gate ON; pause new mid-cap buys/rotations; optionally tighten trail stops on runners; if risk is severe and broad, you MAY sell partial or full risk into USDC — prefer trimming the weakest names first. Always ping the user after any defensive trade with why.
4) EXECUTE plan trades when triggered: +40% first trim (⅓, stop→breakeven); +80–100% second trim; trail last ~15% off highs; weekly rotation (especially Monday): same weakest name 2 consecutive weeklies + lagging basket + gate OFF → sell to USDC and buy at most ONE hotter liquid USD pair with ~13% stop. No average losers; no revenge rebuy ~5 weekdays; max ~4 names; avoid >~35% one name on new buys.
5) Kill switch: if book ~15% below recent high, pause new risk, consider raising cash, tell user.
6) Use client_order_id and portfolio_id on orders; preview when practical.

NOTIFY after any trade or when gate flips / kill switch / major event posture changes. If nothing material, stay quiet. Update memory: ranks, gate, trim flags, fills, defensive actions.

Fill-ins: agent portfolio UUID; starting book reference size if used for reporting.

Fires on:
- cron `0 9,16 * * *`

Ask the importing user for:
- Timezone
