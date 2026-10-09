---
name: skill-first-run
description: "Use this when a Signal Sleeve install needs its wizard and green checks: first message, SETUP, missing setup.green, or before any routine is saved. Not for market scans or tickets."
---

# First Run — Green Checks Before Any Ticket

Stop all market work until `setup.green` is true in convention memory and `/workspace/signal-sleeve/setup.json` exists.

Signal Sleeve is a single orchestrator. Do not create or offer specialist bots at any point.

## Procedure

Work one block at a time. If a connector is missing, name it and stop. Do not skip ahead.

### Block A — Legal and mode
Ask:
1. Confirm this is not advice and that the user owns Agentic fills. Require a typed YES.
2. Confirm a funded Robinhood Agentic account exists, separate from Individual / IRA. Require YES or NOT YET.
3. Mode: PAPER (default), APPROVE, or LIVE-POLICY. If they pick LIVE-POLICY on a fresh install, accept the preference but keep the live gate closed until the paper gate passes: 5 distinct PAPER sessions on the current preset, each with at least one ticket and zero hard-check failures. After that they MAY type ENABLE LIVE. Say that plainly. Never open the gate yourself. On Conservative, ENABLE LIVE is refused: the book stays PAPER or APPROVE. To go live the user must switch PRESET to balanced or aggressive, pass the 5-session paper gate on that preset, then type ENABLE LIVE.

If NOT YET on the Agentic account: give the official path (Robinhood Agentic account + MCP `https://agent.robinhood.com/mcp/trading`) and stop.

### Block B — Research adapter
Ask:
4. Source name. Presets: 22V / Jordi Visser, 42 Macro / Darius Dale, Fundstrat / Tom Lee, Other.
5. Arrival channel: Gmail sender and/or label, Drive folder, uploaded PDF, portal URL, X account, or paste.
6. PRIMARY vs optional CORROBORATOR. The corroborator only flags disagreements: if regimes differ, set regime=MIXED and produce NO-TRADE. Never average the two houses.

Then attempt one successful read:
- Gmail / Drive: search the named sender or folder for the newest note.
- PDF / paste: parse what they attached.
- Portal: only if they already have that session on this computer.

Write `/workspace/signal-sleeve/guidance/latest.json` even if ingest_quality is PARTIAL. If UNREADABLE, ask them to forward or paste the note. Do not invent tickers.

### Block C — Broker lock
7. Confirm Robinhood Trading is connected. If not, ask them to connect it and stop.
8. Call get_accounts.
9. Lock execution to the single account with `agentic_allowed=true`. Store `account_number` and a short label only. Never store passwords.
10. If zero agentic accounts: stop and tell them to open/fund one.
11. If they ask to trade a non-agentic account (Individual, IRA, joint, or agentic_allowed=false): refuse.

### Block D — Preset
12. Conservative | Balanced | Aggressive. Default Balanced if they will not choose.
13. Optional cash-floor override (tighten only), banned tickers, banned sectors.
14. Options: OFF on every preset unless the user explicitly enables them. Explain what their preset would allow once enabled (see skill-risk-presets).
15. Crypto: OFF unless the user explicitly enables it.
16. Optional approved theme map (theme → user-approved tickers). Leave empty if they have none.
17. Quiet hours. Default 21:00–06:00 America/New_York. Notifications are in-bot only (no email, SMS, or X).

Write `/workspace/signal-sleeve/policy.json` from skill-risk-presets (shape: `/workspace/signal-sleeve-template/schemas/policy.schema.json`).

### Block E — Sample ticket and files
18. Build one PAPER ticket from the latest Guidance Object and the Agentic snapshot. If cash is zero, still show the size math and mark blocked_reason=UNFUNDED.
19. Write kill-switch file OFF with empty halt reasons.
20. Create `/workspace/signal-sleeve/marks.json` from current equity (shape: `/workspace/signal-sleeve-template/schemas/marks.schema.json`).
21. Append the sample ticket to the journal as PAPER.
22. Set `setup.green=true` only if all 8 boxes below are true.

## Green-check box (exactly these 8)
- [ ] Typed YES on legal
- [ ] Agentic account locked
- [ ] Source + channel stored
- [ ] Guidance Object written (FULL or PARTIAL)
- [ ] Preset stored
- [ ] Mode stored (live gate closed until the paper gate passes)
- [ ] Sample PAPER ticket written
- [ ] Kill-switch file written

Then offer the four routines from `/workspace/signal-sleeve-template/routines/`. Do not save them until the user says SAVE ROUTINES.

## setup.json shape
Values below are blank defaults, not a real account.
```json
{
  "setup_green": true,
  "legal_yes": true,
  "mode": "PAPER",
  "live_gate_open": false,
  "paper_sessions_completed": 0,
  "paper_sessions_required": 5,
  "source_primary": "22V",
  "source_corroborator": null,
  "channel": {"type": "gmail", "sender": "", "label": "", "drive_folder": ""},
  "agentic_account_number": "",
  "preset": "balanced",
  "options_allowed": false,
  "crypto_allowed": false,
  "approved_theme_map": {},
  "quiet_hours": {"start": "21:00", "end": "06:00", "tz": "America/New_York"},
  "notifications": "in_bot_only"
}
```

`approved_theme_map` shape: `{"<theme name>": ["<TICKER>", "..."]}`. Only the user adds entries; the bot never fills it in. Example key: `"AI power"` → the user's own approved ETF list.
