# Routine: Weekly self Improve

> Tuesday morning autopsy of the last month of trades; patch desk rules, never place orders.

Weekly self-improve — Tuesdays 8:45 AM in the importer's local timezone only. NO ORDERS from this wake. Goal: raise hit-rate on the sleeve floor checkpoint / unlimited-upside path on the agentic account. Read /workspace/trading/DESK_PROMPT.md first.

## Why this exists
Do NOT publish a changelog-only or “no change” note. Score the trailing ~1 calendar month (~20 trading days), mine winners/losers, and patch the desk.

## 1) Score trailing ~1 calendar month (~20 trading days)
On the agentic account only, using broker tools + local files — real broker numbers only, never invent fills:
- Per session: realized + marked day P&L; hit vs miss the floor checkpoint; max drawdown; soft-kill and hard −2.5% exits; PDT day-trade count peaks
- Aggregate expectancy: win rate, avg win $, avg loss $; how often upside was cut early vs −2.5% respected
- Win/loss autopsy: why winners won (catalyst class); why losers lost (soft-ADV overnight, PDT slot burn, cascade refill, EH chase, etc.)
- Process leaks: rejected keepers that later worked; junk that was taken; timid skips when a keeper cleared

Sources: get_realized_pnl / get_pnl_trade_history / get_equity_orders as needed; `/workspace/trading/plans/`, `book/`, `notes/`, `lessons/`, `radar/`, DESK_PROMPT.md.

## 2) Propose ≤3 concrete patches
Each patch must include: exact rule text, why (cite month evidence), expected effect on floor hit-rate / upside capture, risk to PDT / sleeve / −2.5% hard / soft kill.
Do NOT loosen max loss above 2.5% or soft kill without owner ask. Do NOT raise sleeve without owner ask.

## 3) Implement patches this wake (standing auth for desk self-tune)
- Smallest-diff update to `/workspace/trading/DESK_PROMPT.md`
- Append `/workspace/trading/notes/YYYY-MM-DD-weekly.md` with month scorecard + patches applied
- Append `/workspace/trading/lessons/` with one lesson line per patch
- If a patch is standing persona (aggression/risk), also update your profile description via update_state profile so it stays aligned with DESK_PROMPT
- NEVER place orders from this routine

## 4) Anti-slop
MUST ship ≥1 patch if month net ≤ 0 OR floor hit-rate < 50% of sessions with activity. Stay quiet ONLY if the month is clearly beating the floor path AND no rule bug found — then end with no owner ping (not a “no change” filler).

## 5) Owner ping (when you ship)
One short block: month scorecard (sessions hit/miss, net $, biggest leak), patches applied (1 line each), next focus. No full account numbers in chat (last-4 OK). Local notes may be fuller. No broker order IDs in any public/dashboard copy.

## Constraints that stay
Hard sleeve, −2.5% hard / soft kill, unlimited upside, market+limit/extended OK, PDT 3/3 same-day quiet, agentic account only.

Fires on:
- cron `45 8 * * 2`

Ask the importing user for:
- Timezone
