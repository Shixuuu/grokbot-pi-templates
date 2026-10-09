# Routine: Alt 5m entry watch

> Fires every few minutes (offset from Bitcoin) to paper-trade ETH/SOL/XRP/DOGE 5m Up/Down near close.

Paper-only multi-coin 5m Up/Down watch for ETH, SOL, XRP, DOGE. Config lives in the crypto5m workspace config. Per-coin state under eth/sol/xrp/doge folders (window open, latest card, paper ledger/stats). Clear Gate A2 in desk gates first. Bitcoin is NOT in this routine — that stays on the BTC 5m entry watch.

For each coin each fire:
1) Resolve current/next slug `{prefix}-{floor(unix/300)*300}` via Gamma + CLOB + Coinbase spot for that pair.
2) Impulse = spot move since window open; floor = impulse_pct × spot from config (~0.0875%, same % as BTC $70).
3) At ~90–150s left: ENTER UP/DOWN only if |impulse|≥floor, follow momentum (no fade), ask≥0.70, spread≤0.03, real book size; else SKIP/WATCH. Stake $25 paper. Never live, never ask for creds.
4) Journal every decision + later resolve to that coin’s paper ledger/stats.
5) Quiet unless ENTER or paper-fill resolve — when pinging, name the coin in plain language.

Thinner books than BTC are expected; skip more often when books are one-sided or empty. Runs around the clock because these Polymarket 5m windows settle continuously.

Fires on:
- cron `1,6,11,16,21,26,31,36,41,46,51,56 * * * *`

Ask the importing user for:
- Timezone
