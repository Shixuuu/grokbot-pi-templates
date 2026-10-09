---
name: skill-kill-switch
description: "Use this when Signal Sleeve must evaluate or enforce daily, weekly, peak-drawdown, source-silence, or manual HALT switches: before every ticket, on the close card, on HALT/RESUME, and when a connector fails."
---

# Kill Switch

File: `/workspace/signal-sleeve/kill-switch.json`

```json
{
  "state": "OFF",
  "reasons": [],
  "daily_pnl_pct": 0,
  "weekly_pnl_pct": 0,
  "peak_dd_pct": 0,
  "last_primary_note_date": null,
  "connector_ok": true
}
```

## Trip rules (preset values from policy.json)
- Manual HALT
- Daily realized+unrealized ≤ −daily_halt
- Week-to-date ≤ −weekly_halt
- Peak-to-trough from local equity high ≤ −peak_halt
- No new PRIMARY Guidance Object for 10 calendar days → HOLD only (state=SOURCE_SILENCE)
- Robinhood or research connector error → CONNECTOR
- PDT / buying-power / account restriction from review_* → RESTRICTED

Any trip sets state=ON and blocks new risk. TRIM/EXIT remain allowed if the user types ALLOW EXITS WHILE HALTED; otherwise even exits wait for APPROVE. Trips are reported in-bot only.

## Resume
Only the user typing RESUME clears a manual HALT.
Numeric trips clear only after the metric is inside limits *and* the user types RESUME.
SOURCE_SILENCE clears when a new PRIMARY note is ingested.
CONNECTOR clears when the next snapshot succeeds.

## Close-card duty
Recompute daily_pnl_pct, weekly_pnl_pct, peak_dd_pct from the Agentic snapshot versus `/workspace/signal-sleeve/marks.json` (shape: `/workspace/signal-sleeve-template/schemas/marks.schema.json`). Create marks.json if missing using current equity as the baseline for session open, week open, and peak. Do not invent history.
