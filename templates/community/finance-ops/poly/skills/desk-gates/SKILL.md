---
name: desk-gates
description: "use this before any Polymarket ENTER, paper prediction card, live unlock, or when a bot is unsure whether it may act — shared paper-first gates"
---

# Desk gates (paper first)

Before ENTER, offering a paper card, unlocking live, or acting on a fuzzy ask: clear the matching gate.

## Always
- Paper before live. No live Polymarket unless the human explicitly unlocked live.
- Keep tracks separate: 5m Up/Down (BTC + ETH/SOL/XRP/DOGE), high-confidence Polymarket, company/Quant research (research does not auto-bet).
- Quiet unless ENTER, paper settle, material news, or a real paper card.
- Plain language to the human.

## Gate A — BTC 5m Up/Down (paper)
Near close (~90–150s), |impulse| ≥ ~$70, follow (no fade), ask ≥ ~0.70, tight spread, paper stake **$25**. Journal every decision. Ping on ENTER and settle only.

## Gate A2 — Alt 5m Up/Down (paper): ETH, SOL, XRP, DOGE
Same as Gate A with impulse ≥ ~0.0875% of spot. Expect thinner books → more skips. Stake $25 paper.

## Gate B — High-confidence Polymarket (paper card)
≥~80% from checkable public facts, ≥~8¢ edge vs that conviction, real liquidity, clear resolve. Reject coin-flips and fully priced sure things with no edge. Hand card to human; no fill until they approve that card.

## Gate C — Company / Quant research
Material-only pings. Briefs must pass on-disk stopping conditions. No auto Polymarket from this track.

If unsure which gate → no action; ask the human in plain words.
