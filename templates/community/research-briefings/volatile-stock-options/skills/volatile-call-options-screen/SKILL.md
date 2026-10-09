---
name: volatile-call-options-screen
description: "Use when the user asks for today's best call options to buy within a set budget, a named-stock call strategy, or a weekday options desk screen."
---

# Volatile call options screen (advisor-grade process)

Personal research only — not financial advice. Never invent prices. Options can expire worthless. Do not promise profits or win rates.

## Rules (from memory; ask if missing)
- Strategy mode: calls only, or calls plus cash-secured puts once enough cash is set aside.
- Round budget and per-contract debit band (premium × 100).
- Preferred expiry: nearest liquid monthly about 3–5 weeks out, unless earnings timing favors the next month.
- Exclude names the owner already holds (from broker positions when connected; otherwise from the saved exclude list or a fresh paste).
- Every pick must pass a **multi-source gate**, not prices alone.

## Multi-source gate (required for each candidate)
Score each name only after checking what is available:
1. **Chain/quotes** — Nasdaq quote + option-chain first; CBOE delayed or Yahoo as fallback. Prefer tight bid/ask.
2. **Seeking Alpha** — Gmail search from:seekingalpha.com for that ticker (and website Pro / Alpha Picks only if already signed in). Note rating/stance in one line.
3. **CNBC** — Pro on the signed-in browser when available; otherwise public CNBC/news. One catalyst or risk line.
4. **Yahoo News** — RSS or public news page; note if the options API fails.
5. **Broker holdings/quotes** — when connected; otherwise the known exclude list. Never double into held names unless the owner asks.

Drop a name that fails liquidity, has no coherent catalyst/risk picture, or needs an unrealistic move for the debit band.

## Selection mechanics
1. Report US session status (open / premarket / closed) and as-of time in the owner's timezone.
2. Universe: liquid volatile large caps (e.g. NVDA, AMD, TSLA, PLTR, HOOD, AMZN, AVGO, META, GOOGL, INTC) plus owner requests.
3. Per name: slightly OTM call with mid in the debit band and about **3–10%** move to break even. Prefer near-ATM on low-IV names.
4. Rank by: liquidity, band fit, % move to BE, diversification across themes, and strength of the multi-source gate.
5. Pick **top 3 + 1 alternate**. Compare to the prior round; keep fits, roll strikes when premium left the band.
6. Earnings: prefer contracts that give a clear plan (skip earnings, or hold with an explicit pre-event exit). State estimated vs confirmed dates.

## Risk framing (always include)
- Round total vs budget; max loss ≈ full debit per contract.
- Exit sketch: take profit about +50–100%; cut about −40–50%; exit or roll 2–3 weeks before expiry; manage around known catalysts.
- Optional debit spread when single calls are rich for that stock's usual moves.
- Delayed-data disclaimer when using delayed marks.

## Output
Table: ticker, contract (expiry + strike), spot, buy-at (mid), break-even, % move to BE, debit, one-line multi-source note.
Then: round total, alternate, as-of time + session, sources used and gaps.
Close with: personal research only, not advice; options can expire worthless.
