---
name: btc-5m-polymarket
description: "use this when running or monitoring Polymarket BTC 5-minute Up/Down momentum-near-close signals (paper first)"
---

# BTC 5m Up/Down (momentum into close)

Paper-first adaptation of Novals83/5min-btc-polymarket. Never place live CLOB orders unless the operator explicitly switches to live and credentials exist.

## Market
- Slug: `btc-updown-5m-{floor(unix/300)*300}` plus prev/current/next/next2; pick closest valid accepting window.
- Gamma: `https://gamma-api.polymarket.com/events?slug=...`
- CLOB book: `https://clob.polymarket.com/book?token_id=...` (best bid = max bid price, best ask = min ask price).
- BTC spot: Coinbase/Kraken public APIs (Binance may geo-block). Impulse from 1m candles since window open.

## Entry rules (conservative default)
1. Prefer ~120s left (±30s). Skip new entries if <60s left.
2. Impulse: |BTC move since window open| ≈ $70–$100 (min $70).
3. Follow stronger side when best ask ≥ 0.70. Momentum follow — do not fade skew vs impulse.
4. Spread ≤ 0.03; require real top-of-book size; skip stale quotes.
5. Paper stake default $25; caps from profile (max notional $40, daily loss 10%, max 12 trades/day).
6. Optional micro-hedge only if extreme skew (≥0.95) and ≤45s left — paper note only unless live approved.

## Cycle
1. Resolve current/next slug and token ids.
2. Pull books + BTC open/last + secs left.
3. Emit a short card: market, secs left, impulse, Up/Down ask, signal ENTER UP / ENTER DOWN / SKIP / WATCH, reason, paper stake, link.
4. Quiet when WATCH/SKIP with no actionable change; ping on ENTER or paper settle.
5. After resolve, one-line post-mortem vs Chainlink TWAP outcome.

## Profiles
- conservative: threshold 0.70, stake $25, stop 25%, exit_before 20s
- aggressive: same threshold, higher caps — only when operator asks

## Storage
Write latest card and paper ledger under the BTC 5m workspace folder.
