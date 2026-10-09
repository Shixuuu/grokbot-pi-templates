# Routine: Desk cycle

> Weekday desk wakes (freeze-mode drops 11 and 13) to clerk opens, hunt keepers inside the sleeve, and stay quiet when nothing changed.

Single desk cycle for an agentic Robinhood account and a hard open-notional sleeve. Read /workspace/trading/DESK_PROMPT.md. Use the importer's local timezone weekdays only.

**FREEZE-MODE CRON (active while soft-ADV FREEZE and/or RED DAY / no-hunt):** intended desk window = `0 8-10,12,14-16,18 * * 1-5` (drop 11:00 and 13:00). When freeze lifts and hunting resumes: restore `0 8-16,18 * * 1-5` and note it. If outside the active window, stay silent and end.

Standing auth (configure after import): places/cancels/exits standing-authorized when the owner has approved auto-trade. Never ask chat go/no-go once authorized. Cheap review_* then place. Fresh UUID ref_id. Auto-review block → identical approval-card retry.

## 0) ULTRA-CHEAP QUIET (after reading book) — with overrides
Load `/workspace/trading/book/latest.json`.
**Do NOT ultra-cheap skip if:** any open has stop_within_1pct OR peak_trail_armed OR same-day soft-ADV lot OR (before 09:30 local AND overnight/prior-session opens exist) — those wakes = full bootstrap + full clerk.
Else if same local day AND action NOTHING_NEW AND opens unchanged AND soft-kill/cascade/PDT still clear → quotes (+ trail math) only on open symbols, then SILENT END. Skip get_accounts/portfolio/realized_pnl/week-PDT re-bootstrap and skip news/X unless a quote breaks hard/−2.5%, peak trail, or spread alert. Full bootstrap when book stale, opens changed, or any alert.
**OPENING BOOTSTRAP:** 08:00 and 09:00 with overnight/prior-session opens → always full-bootstrap.

## 1) Bootstrap CHEAP (no news/X yet) — when not ultra-quiet
get_accounts (STOP if not agentic_allowed) → get_portfolio → positions → realized_pnl day → pnl_trade_history week (PDT) → load plans/book.
Flags: LOSS {slack_channel_id} LOCK today? RED DAY (day P&L already negative)? SOFT-ADV FREEZE active (floor hit-rate <50%)?

## 2) Clerk opens (quotes + trail math ONLY by default)
For each open lot: −2.5% hard, plan stop, tape, spread, stop_within_1pct.
- Soft kill (set in DESK_PROMPT, typically ~3.5% of sleeve): flatten what PDT allows; MUST notify; at 3/3 leave overnight + STOP (no hunt).
- HARD −2.5% only if PDT < 3/3 → market-sell; net loss → {slack_channel_id} LOCK.
- **PRIOR-SESSION STOP≈1% → EXIT:** prior-session lot within ~1% of hard −2.5% floor AND PDT < 3/3 → flatten this wake (not alert-only). Net loss → {slack_channel_id}. At 3/3: alert + hold overnight.
- PDT 3/3: NO −2.5% hard exits — hold ALL overnight; tomorrow re-clerk. Soft kill still notifies.
- PEAK TRAIL: once ≥ +5% from avg, track session peak %. Giveback ≥ 50% of unrealized OR last back under +2% after ≥ +5% → trim/exit PDT-aware (at 3/3 leave overnight + ALERT). Notify on trail fire.
- OPEN-NAME ALERTS: ≥ +8% once/day; spread > ~1.5%; earnings-in-2d; thesis-dead only when quote broken or trail near.
- EH: judge hard on last_non_reg when bid phantom-thin.
- **Open chase lots:** do not add size to a same-day entry that never made ≥+1% from cost; manage with −2.5%/peak trail only.

## 3) CHEAP EXIT — {slack_channel_id_2}
If soft kill clear AND no actionable hard/trail/stop≈1% exit AND (PDT 3/3 OR {slack_channel_id} LOCK OR sleeve full with no rotate OR flat/stable) → SILENT END. No catalyst/X. No filler.

## 4) Hunt only when cascade clear AND not PDT 3/3-quiet
- **SOFT-ADV FREEZE:** until rolling floor hit-rate ≥ 50%: hard ADV ≥ 2M only for every new long (no soft-ADV). Prefer pyramid / skip.
- **NO SESSION-HIGH MARKET BUY:** no new-name market buy if last within ~0.5% of today’s RTH session high — limit ≥~0.4% below last, wait, or skip. Pyramid adds ≥+3% OK if not blow-off high.
- **PULLBACK ENTRY (tightened):** no market-buy new name if last within ~1% of session high AND ≥ +3% vs prior close — limit pullback or skip.
- **EARNINGS/PRINT SPIKE:** if thesis is that print and name already extended — wait giveback before entry (see giveback unlock). No aggressive buy into immediate post-print spike.
- **AGGRESSIVE = MARKET (earnings/gap days):** market, stop, and limit-at/through-ask = aggressive = **banned within ~1% of RTH session high**. Limit must be clearly below last (not through the ask).
- **GIVEBACK UNLOCK:** ≥1% off HOD counts only after a **5-min bar CLOSES** ≥1% off session high **with no new high since** (no wick fades).
- **GAP OPEN:** don’t treat first print as free chase; use prior close + opening range.
- **Open chase lots:** do not add size to a same-day entry that never made ≥+1% from cost; manage with −2.5%/peak trail only.
- 18:00 wake: clerk-first; hunt only if cascade clear + NO EXTENDED CHASE.
- Before 09:30 or after 16:00: hunt ONLY if keeper clears NO EXTENDED CHASE; whole-share limit extended/all_day; skip EH if spread > ~1%.
- SPY TAPE GATE (1 quote). RED DAY FLAT BIAS + NO EXTENDED CHASE + no mega/index filler + sub-floor refill hard ADV ≥ 2M.
- PYRAMID WINNERS: open ≥ +3% + thesis + sleeve ≥ $40 → prefer add vs new name (subject to no-chase-high / open-chase-lot rules).
After PLACE write plans/<SYM>.json + book; persist peak % fields.

## 5) Notify when real
Live place, pyramid add, must-know reject, soft kill / hard −2.5%, prior-session stop≈1% exit, peak-trail fire, +8% milestone, spread blowout, earnings-in-2d, stop≈1%, PDT 2/3 or 3/3, cascade lock, sleeve full with better keeper waiting, extended fill/reject. Quiet on NOTHING_NEW.

## 6) Cron restore note
When soft-ADV FREEZE lifts and hunting resumes: update this routine schedule back to `0 8-16,18 * * 1-5`, refresh DESK_PROMPT Session hours, and notify once.

Fires on:
- cron `0 8-10,12,14-16,18 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id
