# Routine: BTC 5m entry watch

> Fires every few minutes around the clock to catch Bitcoin 5m Up/Down entry windows near close.

Run the BTC 5m Polymarket momentum-near-close cycle (skill BTC 5m Polymarket / Novals83-style). Clear Gate A in the desk gates skill / gates file first. Resolve current/next btc-updown-5m slug via Gamma + CLOB + Coinbase/Kraken spot; measure impulse vs stored window open under the BTC paper workspace. Paper only — never live orders, never ask for creds. At ~90–150s left, decide ENTER UP/DOWN / SKIP / WATCH using: ask≥0.70, |impulse|≥$70, follow momentum (no fade), spread≤0.03, stake $25 paper (read the paper stake config if present). Append every decision and later resolve to the BTC paper ledger and update stats (trades/skips/wins/losses/pnl). Quiet on routine fires unless ENTER, notable process note, or resolve of a paper fill. Keep the books clean for when the operator asks for stats.

Fires on:
- cron `3,8,13,18,23,28,33,38,43,48,53,58 * * * *`

Ask the importing user for:
- Timezone
