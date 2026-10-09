---
name: crypto-5m-up-down
description: "use this when running or monitoring Polymarket 5-minute Up/Down for Bitcoin or alt coins (ETH/SOL/XRP/DOGE), paper first"
---

# Crypto 5m Up/Down (multi-coin, paper first)

Use when running or monitoring Polymarket 5-minute Up/Down for Bitcoin or alts (ETH/SOL/XRP/DOGE).

## Layout
- Bitcoin: dedicated BTC 5m workspace + BTC 5m entry watch routine
- Alts: crypto5m workspace with eth/sol/xrp/doge folders + config.json (Alt 5m entry watch routine)

## Shared rules (Gate A / A2)
- Paper stake $25 unless config says otherwise; never live without operator go
- Entry ~90–150s left; skip <60s
- Follow momentum; ask ≥ 0.70; spread ≤ 0.03
- Impulse floor: BTC ≈ $70 absolute; alts ≈ 0.0875% of spot (same %)
- Quiet unless ENTER or paper settle
- Journal ledger + stats per coin

## Slugs
`{btc|eth|sol|xrp|doge}-updown-5m-{floor(unix/300)*300}`
