---
name: dentrade-chase-audit
description: "Use when this desk is losing money, buying highs, or the user asks to review/fix trading quality or chase behavior."
---

# DenTrade chase audit

## Goal
Stop buying strength at the high. Raise floor hit-rate without loosening −2.5% / soft kill / sleeve / PDT rules.

## Evidence
Read `/workspace/trading/book/latest.json`, `plans/`, `notes/*weekly*`, `DESK_PROMPT.md`, and the live desk-cycle routine on this bot.

## Typical leaks
- Market buy near session high after a small gap (pullback rule too loose)
- Extended-hours gap chase
- Soft-ADV / cascade refill
- Idle buying power after freeze with no hunt quality

## Corrective pack (apply unless already present)
1. **NO SESSION-HIGH MARKET BUY** — no new market buy if last is within ~0.5% of today’s session high (RTH). Use limit ≥0.4% below last or skip.
2. **Tighten PULLBACK** — block market buys when ≥ +3% vs prior close AND within ~1% of session high.
3. **EARNINGS PRINT** — if thesis is that print, wait for ≥1% giveback from session high after a 5-min bar closes off HOD with no new high, or first clean pullback; no market/stop/limit-through-ask within ~1% of HOD on earnings/gap days.
4. **GAP OPEN** — use prior close + opening range; don’t treat first print as free chase.
5. **Red-day** — prefer flat; don’t refill sleeve just because BP is idle.
6. Update desk-cycle prompt + DESK_PROMPT + lessons note; manage open chase lots with trail/−2.5% only (no add).

## Tools
Prefer the Robinhood trading connector via this desk bot. Optional public web search for catalyst confirmation.
