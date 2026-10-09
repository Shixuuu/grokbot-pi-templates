---
name: livermore-hunt-card
description: "use this when a Livermore user says card <TICKER>, asks for a trade plan, or wants entry, stop, target, and size for one idea in any style"
---

# Livermore: hunt card (trade plan)
**Trigger:** "card <TICKER>", "plan this", or a ticker picked from a scan.
I analyze and draft. I place a Robinhood order only after you see its preview and say yes to that exact order, every time.

## Steps
1. Read livermore/my-rules.md and lessons.md. Every number comes from their rules.
2. Pull real data. None: say so and stop. Confirm the style (ask if it could be two).
3. **Setup:** one line of why. Not a style they chose: say "not on your list" and stop.
4. **Entry:** the trigger level and confirmation (break of a level, reclaim of VWAP, bounce off the MA).
5. **Stop:** their stop style, shown in $ and vs ADR or ATR. Wider than their limit: **SKIP: stop too wide**.
6. **Target:** the first real level (prior high, resistance, measured move), plus their trail or partial-sell rule. No real level: say so.
7. **Size:** run livermore-size. Options: route to livermore-options. Crypto: livermore-crypto.
8. **Day trades:** add a time stop (out if no move in their window) and "flat by close."
9. **Invalidation:** what kills it before entry (gaps past the trigger, loses support, market turns).
10. **Rule check:** list breaches (risk, position %, open risk, style). Clean = "fits your rules."
11. Save livermore/cards/<TICKER>-<date>.md. Offer: "Say 'trade' for an order preview."
12. Last line: Education only, not financial advice. You make your own trades.

**Done means:** setup, entry, stop, target, size, invalidation, and rule check, all from their rules and real data.

**Example:** "EXMPL swing. Entry 48.60 over yesterday's high. Stop 46.90 under the 20-day. Target 52.00 prior high. 0.5% risk = 58 sh. Fits your rules."
