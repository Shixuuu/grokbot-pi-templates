---
name: skill-risk-presets
description: "Use this when Signal Sleeve applies Conservative, Balanced, or Aggressive limits and sizes a ticket: writing policy.json, TICKET, PRESET changes, ENABLE LIVE checks, or drift checks. Not for ingest."
---

# Risk Presets

Read `/workspace/signal-sleeve/policy.json` (shape: `/workspace/signal-sleeve-template/schemas/policy.schema.json`). If missing, build it from setup.preset and the table below.

Size with `/workspace/signal-sleeve-template/scripts/size_ticket.py` when Python is available. Do not invent a different scaler.

The user may tighten any value. Never loosen one without an explicit typed override.

## Tables

| Rule | conservative | balanced | aggressive |
|---|---|---|---|
| cash_floor | 0.40 | 0.15 | 0.05 |
| max_names | 6 | 10 | 14 |
| new_names_per_week | 1 | 2 | 4 |
| pos_cap_entry | 0.05 | 0.08 | 0.12 |
| pos_hard_cap | 0.08 | 0.12 | 0.18 |
| sector_cap | 0.25 | 0.30 | 0.40 |
| options_default | false | false | false |
| crypto_default | false | false | false |
| satellite_sleeve | 0 | 0 | 0.20 |
| entry_start_et | 11:00 | 10:30 | 09:45 |
| entry_end_et | 15:00 | 15:30 | 15:55 |
| regular_hours_only | true | true | true |
| monday_open_ok | false | false | false |
| first_minutes_ban | 09:30-10:15 | 09:30-10:15 | 09:30-09:45 |
| cut_core | 0.10 | 0.12 | 0.15 |
| cut_satellite | n/a (CORE only) | 0.12 | 0.08 |
| daily_halt | 0.02 | 0.03 | 0.04 |
| weekly_halt | 0.04 | 0.06 | 0.08 |
| peak_halt | 0.08 | 0.12 | 0.15 |
| min_adv_usd | 20000000 | 10000000 | 5000000 |
| paper_sessions_required | 5 | 5 | 5 |
| mode_after_paper_gate | PAPER or APPROVE only; ENABLE LIVE refused | APPROVE; LIVE-POLICY only if user types ENABLE LIVE | APPROVE; LIVE-POLICY only if user types ENABLE LIVE |

## Paper gate and ENABLE LIVE
Paper gate: 5 distinct PAPER sessions on the current preset, each with at least one ticket and zero hard-check failures. Only the user's typed ENABLE LIVE opens LIVE-POLICY; the bot never does.
On Conservative, ENABLE LIVE is refused: the book stays PAPER or APPROVE. To go live the user must switch PRESET to balanced or aggressive, pass the 5-session paper gate on that preset, then type ENABLE LIVE.
If the user switches PRESET to conservative while live_gate_open is true, set live_gate_open=false and mode=APPROVE, and journal a MODE row.

## Options (OFF on every preset until the user explicitly enables them)
Once `options_allowed=true`, each preset permits at most:
- conservative: no single-name options structures.
- balanced: cash-secured puts and covered calls only.
- aggressive: long calls/puts, cash-secured puts, and covered calls, if the account option level allows. No naked short calls. No multi-leg until the user types ENABLE MULTILEG.

## Crypto
OFF on every preset until the user sets `crypto_allowed=true`.

## Eligible actions
- conservative: BUY, ACCUMULATE on CORE only
- balanced: BUY, ACCUMULATE, TRIM, EXIT
- aggressive: BUY, ACCUMULATE, HOLD (no add), TRIM, EXIT; SATELLITE allowed up to satellite_sleeve

## Confidence scaler
`cap_used = pos_cap_entry * {5:1.0, 4:0.8, 3:0.6, 2:0.0, 1:0.0}`
Confidence 1–2 is brief-only. No new risk.

## Hard checks before a buy ticket
1. Kill switch OFF
2. Mode allows this action (LIVE-POLICY never on conservative)
3. Symbol named in PRIMARY guidance or on the user's approved_theme_map
4. Regime is not MIXED (a PRIMARY/CORROBORATOR split means NO-TRADE)
5. Action eligible for preset
6. Names open < max_names (new name) and new-names-this-week < cap
7. Proposed notional ≤ remaining room under cash_floor, pos_cap, sector_cap, hard_cap
8. ADV ≥ min_adv_usd unless user typed ALLOW PENNY
9. Not OTC, not halted, quote present
10. Inside entry window, regular hours, not in first_minutes_ban, not Monday open — unless user typed OVERRIDE WINDOW (never outside regular hours)
11. Earnings in 5 sessions: conservative = block new risk; others only if note says hold through
12. Options/crypto only if setup flags are true and account level allows

TRIM/EXIT ignore new-name caps. Still respect agentic-only and review-then-place.
