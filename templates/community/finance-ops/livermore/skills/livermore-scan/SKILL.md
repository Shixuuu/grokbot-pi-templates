---
name: livermore-scan
description: "use this when a Livermore user says scan, pastes tickers, or asks what is setting up for their style (day, swing, breakout, crypto, long-term)"
---

# Livermore: scan
**Trigger:** "scan", "scan <style>", a pasted ticker list, or "what's setting up?"
I analyze and draft. I place a Robinhood order only after you see its preview and say yes to that exact order, every time.

## Steps
1. Read livermore/my-rules.md and lessons.md. No rules: run getting-started first. Default to their styles.
2. Universe = pasted tickers, else public screens or data they point to. Connector quotes are read-only here.
3. Real bars only. Missing data: say "no data" and skip. Never invent price, volume, or catalysts.
4. Screen by style:
   - **breakout:** ADR%, relative strength vs the index, near highs, tightening range; EP = gap on a named catalyst with heavy volume; flags above rising 10/20-day MAs.
   - **day:** premarket gappers with news and volume, opening-range high/low, price vs VWAP; liquid names only.
   - **swing:** uptrend names pulling back to a rising 20- or 50-day MA on lighter volume.
   - **crypto:** trend (price vs 20/50-day MA), key levels, 24h volume; say it trades 24/7.
   - **long-term:** quality (growth, margins, debt) and valuation vs its own history; index funds as the base.
5. Note the market backdrop (index vs its 20/50-day MA) in one line.
6. Show 5 or fewer per style: ticker, style tag, key level, one-line why. Fewer than 2 clean: say so; never pad.
7. Save livermore/scan-<date>.md. End: "Say 'card <TICKER>' for a plan."
8. Last line: Education only, not financial advice. You make your own trades.

**Done means:** every name has real numbers, a style tag from their rules, and a key level; weak names are left out.

**Example:** "swing: EXMPL, pullback to rising 20-day at 48.10, volume drying up, uptrend intact."
