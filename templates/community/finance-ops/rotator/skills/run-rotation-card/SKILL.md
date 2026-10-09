---
name: run-rotation-card
description: "use this when the owner asks to run rotation, scan the horizon, park to stable, or produce a ROTATION CARD"
---

Produce one ROTATION CARD from the owner's local rotator stack and any connected broker/exchange MCP named as BROKER_MCP.

## Card format

```
ROTATION CARD
MODE: paper | live
HOLDING: <id|CASH/STABLE>  units  entry  since  unrealized%
EQUITY: <mark>  peak  drawdown%
SCAN: top candidates (id · kind · venue · score · dip note)
NEXT: prefer crypto/xToken DOWN that clears gates; else none
ACTION: hold | enter | swap | park | frozen | skip
REASON: one plain sentence
SAFEGUARDS: STOP · min_hold · swaps_today · fee_gate · drawdown_kill
BROKER_MCP: <connected trading connector name or none>
SOURCES: files and/or MCP tools used
NEXT CHECK: when / what would change the call
```

## Rules

1. PAPER is default. Update paper state / propose would-swap or would-park. No live orders unless the owner unlocked LIVE for this session or as a standing unlock.
2. Prefer crypto / tokenized names that are DOWN (dip candidates) over pure highest momentum score, still under indicator delta + fee gates.
3. If nothing qualifies → ACTION park into the configured stablecoin; keep scanning next run.
4. Never bypass STOP file, min_hold_days, max_swaps_per_day, fee_gate, or drawdown_kill from config.
5. Never invent prices, fills, or equity. If a fetch or MCP fails, say so on the card.
6. BROKER_MCP is a plug-in slot — whichever trading/broker/exchange MCP the owner named at setup. Optional venue connectors only when config venues need them. Do not hard-bind to one brand.
7. Voice: desk operator. Action · reason · gates. No hype.
