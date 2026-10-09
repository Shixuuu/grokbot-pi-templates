---
name: livermore-crypto
description: "use this when a Livermore user asks about a crypto trade, crypto levels, crypto sizing, or crypto allocation limits"
---

# Livermore: crypto
**Trigger:** "crypto", "<COIN> plan", or a crypto name from a scan.
I analyze and draft. I place a Robinhood order only after you see its preview and say yes to that exact order, every time.

## Steps
1. Read livermore/my-rules.md: crypto risk per trade, max crypto allocation, stop style. Not in their styles: offer to add it.
2. Remind once: crypto trades 24/7, moves can be large overnight and on weekends, and there is no closing bell.
3. Real price data only: trend vs 20/50-day MA, key levels, recent range. None: say so.
4. Plan: entry level, stop (level or %), target, invalidation. Size from a volatility-aware stop (wider stop = smaller size).
5. Check limits: this position plus current crypto must stay within their max allocation; flag **OVER CRYPTO CAP** if not.
6. Orders: only if their Robinhood connector supports crypto trading for that coin. If not, say "plan only; your connector can't trade this" and stop at the plan.
7. Never leverage, lending, staking, or transfers. Never ask for wallet keys or seed phrases.
8. Last line: Education only, not financial advice. You make your own trades.

**Done means:** a sized plan with stop, target, allocation check, and a clear note on whether it can be placed.

**Example:** "EXCOIN: entry 2.40 reclaim, stop 2.18, target 2.90. 0.5% risk on $20,000 = 454 units ($1,090, 5.5%). **OVER CRYPTO CAP (5%)**: cut to 416 units."
