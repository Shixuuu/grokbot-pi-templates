---
name: fleet-tempo-audit
description: "Use this when auditing routines across the user's bot fleet — inventory, run-frequency ranking, cron→event pass with exact event shapes, Keep/Retune/Pause/Delete scoring, and the required audit report format."
---

# Fleet tempo audit

## Scope
Default is fleet-wide: every assistant under `/home/box/agent-data/agents/`. Narrow to one bot only if the user names it. An "audit" always includes computer-use burns unless the user scopes to tempo-only.

## Inventory
1. List agents; read each `profile.json` for name/description.
2. For each agent, read `automations/` — every routine's job/prompt text. Note `schedule` (cron) OR `trigger` (event), never both.
3. Read `runs.json` when present. Count runs, sum wall-clock `(finishedAt - startedAt)`, note ok/fail. Rank hottest runners fleet-wide before scoring. History is a recent window (~last ~20 runs), not lifetime. No invented token/$ costs.
4. Scan routine prompts + agent descriptions + skills for computer-use burns (computerUse, browserUse, Screenshot, "open the site", "click", GUI loops).

## Score every routine
Keep / Retune / Pause / Delete with a one-line tempo reason. Flag when:
- Cadence too fast for value, or high run-count cron that maps to a supported event
- Quiet hours (~10pm–7am local) or weekends without a stated reason
- Event exists but the routine crons instead
- Frozen tool recipe instead of intent; missing quiet-if-empty
- Finite watch with no self-expire / deadline
- Cross-bot duplicate or double-ping
- Auth-broken on repeat (verify from history — never invent failures)
- Empty `runs.json` / never fired and stale → Pause or Delete candidate

## Cron → event pass (mandatory)
For every cron routine, map purpose against supported event triggers (Slack, GitHub, Origin, Microsoft Teams, Linear, Sentry, PagerDuty, email, webhook, or a group of these). If a listener fits, propose Retune with the exact trigger shape. Digests/reminders with no platform event stay cron — say "cron correct". If a platform isn't connected, note that instead of claiming ready-to-apply.

## Applying changes
Propose first; wait for explicit approve. Own routines: update_state (target routine) — for cron→event, replace schedule with the approved trigger. Other bots: message that bot via SendToAgent with the exact change — do not silently rewrite their files. Batch approve across the fleet when many changes.

## Cadence defaults
Weekday daytime; pin day-of-week AND hour; named clock times stay as named; prefer listeners over polling; start coarsest useful cadence.

## Required audit report format
Every audit reply uses this structure, in this order. No essay before the TLDR. Never skip empty sections — say "none" / "none found".

## Tempo audit — TLDR
- Bots scanned: N
- Routines: N total · Keep X · Retune Y · Pause Z · Delete W
- Cron→event opportunities: N (or "none — crons are digests/reminders")
- Computer-use burns: N found (or "none found")
- Cross-bot duplicates: N (or "none")
- Hottest runners (by recent run count): top 3–5 as `bot / routine (N runs, ~Mm total)`

## 0) Run frequency (recent window)
Rank all routines with run history by run count (desc), ties by total wall-clock. For each: bot · routine · runs · ok/fail · total duration · avg duration · trigger type. No token/$ estimates.

## 1) Routines (by bot)
Per bot: each routine — Keep|Retune|Pause|Delete — one-line reason, plus a one-line proposed fix when not Keep. Bots with no routines: "(none)".

## 1b) Cron → event opportunities
Walk every cron routine: keep as cron (why) or Retune → event with the exact trigger proposal. Prioritize hot runners.

## 2) Computer-use burns
For each burn: bot, where, what it does, better path (connector | API/CLI | one-shot capture→script), proposed change. Or "None found across fleet."

## 3) Needs your approve
Numbered list of concrete actions only. If nothing: "Nothing to change."
