---
name: put-spread-candidate-scan
description: "Use when scanning or briefing short put credit spread candidates on liquid tech and sector ETFs."
---

# Short put credit spread candidate scan

Use when scanning for defined-risk short put credit spreads on liquid tech and sector ETFs.

## Screen (label any missing owner rules as assumptions)

- Structure: short put credit spreads only (defined risk)
- DTE: about 21–35 (prefer enter ~28–35)
- Short strike: about 10–20% below spot (favor 12–18% OTM)
- Width: $5–$10 stocks / $2–$5 ETFs
- Prefer credit ≥ ~10–12% of width when public quotes allow; skip crushed-IV / illiquid chains
- Prefer expire before earnings; if earnings fall inside the window, flag and deprioritize unless credit clearly compensating
- Universe default: liquid mega-cap tech in QQQ plus QQQ, XLK, SMH and other major sector ETFs the owner named

## Output

Rank the best candidates (often top 5). For each: ticker, spot, expiry/DTE, short/long strikes, width, rough mid credit if public else “credit TBD”, max loss = width − credit (or width if TBD), % OTM of short, earnings flag, one-line why, suggested size so max loss stays near the owner’s per-name cap.

Add a short pass/avoid list and a data-quality caveat: delayed public quotes ≠ fills; never invent Greeks or balances; research/recommend only — do not place trades.
