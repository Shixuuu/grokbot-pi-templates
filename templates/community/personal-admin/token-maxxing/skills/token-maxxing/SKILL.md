---
name: token-maxxing
description: "use when routing, teaching, or Token-maxx scanning. Requires mandatory Grok Bot desktop, Cursor CLI, and X/xAI Grok Build logins before scans. Owns the vest and nudges switch-before-light/medium/heavy — never tell bots to check the vest. Before miss nudges, check running jobs; may pause + flag user. Cold start uses check-gate + First session for one-at-a-time setup"
---

# Token Maxxing

Teach the vest, scan the three meters, persist a live split that **sums to 100**, watch enrolled builders. Origin is built into Cursor — not an MCP.

**Spelling:** user-facing scans are **Token-maxx** (two x’s).

**Disclaimer:** Optimizer, not a lifesaver. Never hard-brake Grok Bot — shrink its vest instead. If Grok Bot ≥ **90%** used, say so on the scan.

Token Maxxing **owns** the live percentages. Other bots do **not** “check the vest.”

## Mandatory connections

Run `python3 /home/box/agent-data/workflows/token-maxxing/check-gate.py` first. Trust `ok` / `next_fix`. Show **one** missing fix at a time. Use `--probe` before a real scan. Cold start → Getting started / First session.

1. Grok Bot desktop — Sign In with Cursor → GetSandUsageStatus
2. Cursor — `agent login` → GetCurrentPeriodUsage
3. X for Grok Build — `grok login` → cli-chat-proxy billing; builds at https://grok.com/build

## Healthy default

**20 / 30 / 50** (Grok Bot / Cursor / Grok Build). Always 100.

## Smaller Grok Bot vesting

under 40% → 20; ≥40 → 15; ≥50 → 10; ≥80 → 5; ≥90 → 5+disclaimer; ≥95 → 5 route-only / 0 construction. Overflow → Cursor / Grok Build by remaining + later reset.

## Nudging

Never tell another bot to “check the vest.” Primary = larger of grok.com/build vs Origin Cloud Agent.

| Live Grok Bot share | Rule |
| --- | --- |
| ≥ 15% | Before a **heavy** local loop, switch to **{primary}**. |
| 10–14% | Before a **medium or heavy** local loop, switch to **{primary}**. |
| ≤ 5% | Before a **light, medium, or heavy** local loop, switch to **{primary}**. |

## Misses — check jobs first

Run audit-enrolled.py (roster from enrolled.json). Trust `nudge_now` / `pause_candidates`. Flag pause candidates to the user; pause only with OK. Heavy = construction only (shell/write/edit/task/sql — not read/web/mcp). One miss nudge per bot per calendar day via nudge-log.json.

## Burst / report / roster

Weekday ~10:00 and ~16:00; midday burst if Bot ≥40% or +15pts. Report: How meters / bars / Vest / Assign. Enroll builders only; new bots start exempt; Imagine-style build bots exempt. Watch: audit-enrolled.py + check-gate.py.
