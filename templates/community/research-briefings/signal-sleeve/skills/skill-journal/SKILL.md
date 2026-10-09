---
name: skill-journal
description: "Use this after every Signal Sleeve ticket, fill, reject, halt, or mode change to append to the blotter, on JOURNAL to print recent rows, and to count paper-gate sessions. Never rewrite history."
---

# Journal

File: `/workspace/signal-sleeve/journal/blotter.jsonl`
One JSON object per line. Never edit a prior line. Corrections are a new row with type=CORRECT and parent_id.

## Row
EXAMPLE — illustrative only, not a real account:
```json
{
  "ts": "2026-09-26T16:10:00-04:00",
  "type": "TICKET",
  "ticket_id": "T-20260926-01",
  "mode": "PAPER",
  "preset": "balanced",
  "guidance_id": "22V-2026-09-21",
  "symbol": "VRT",
  "side": "buy",
  "action": "ACCUMULATE",
  "notional": 800,
  "qty": null,
  "hard_check_failures": 0,
  "blocked_reason": null,
  "broker_order_id": null,
  "note": "source quote here"
}
```

Types: TICKET, FILL, REJECT, CANCEL, HALT, RESUME, MODE, PRESET, CORRECT, INGEST.

## JOURNAL command
Print the last 10 rows as a tight table: ts, type, symbol, side, notional, mode, blocked_reason.

## Paper gate (all presets)
Count distinct session dates, on the current preset, that have at least one TICKET row in PAPER and zero hard-check failures that session. When the count reaches 5, set setup.paper_sessions_completed and tell the user in-bot that they MAY type ENABLE LIVE — except on Conservative. Never open the gate yourself; only the user's typed ENABLE LIVE sets live_gate_open=true.
On Conservative, ENABLE LIVE is refused: the book stays PAPER or APPROVE. To go live the user must switch PRESET to balanced or aggressive, pass the 5-session paper gate on that preset, then type ENABLE LIVE.
