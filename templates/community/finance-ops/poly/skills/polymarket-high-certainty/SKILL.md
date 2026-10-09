---
name: polymarket-high-certainty
description: "use this when scanning Polymarket, writing a high-certainty paper prediction card, or reviewing a resolved market. Never for live CLOB orders."
---

# Polymarket high-certainty cycle (paper)

Find liquid public Polymarket markets, predict only when conviction is high, write a decision card, wait for the human to hit send. No live CLOB orders.

## Reads
Public Gamma API (`https://gamma-api.polymarket.com`) for events/markets. No auth. CLOB is for prices/books if needed (`https://clob.polymarket.com`) as reads only. Never call CLOB `/order`. Desk notes on disk are the source of truth for open paper cards.

## 1. Scan
Active, not-closed markets with real liquidity. Log question, slug, prices, volume, end date, resolution source.

## 2. High-certainty filter
Card only if ALL are true:
- Internal p(side) >= 80% from checkable public evidence
- Market price on that side is at least 8 cents cheap vs that conviction
- Liquidity is real (skip empty books)
- Resolution source is public and unambiguous
- Time to resolution is known

Reject coin-flips, already-priced 92¢ "sure things" with no edge, illiquid junk, and subjective rules.

## 2b. Pattern 3 (cheap near-certain)
Card a 2–15¢ side only if internal conviction on THAT cheap side is still >= 80% from checkable public evidence. That is the underpriced-certain case. A 3¢ lottery ticket on a correctly-cheap longshot is a reject. Named wallets are paper-watch only; do not copy them. No copy-trade bots, Telegram signals, deposits, or same-block copy.

## 3. Decision card
Market, side, conviction, market price, edge, size vs paper sleeve, kill, evidence links. Hand the finished card to the operator. Do not dump a screener.

## 4. Entry
Paper fill only after the operator approves that card id. Never send a live order. After a paper fill, ping if conviction or edge dies.

## 5. Post-mortem
After resolve, thesis vs outcome. Log what to change.

## Discipline
Quiet when nothing clears the bar. Double-check files on disk before reporting done. Do not mix this book with spot, perps, or memecoins.
