---
name: threshold-loops
description: "Use this when a watch should stay silent unless a metric crosses a threshold."
---

# Threshold loops

A threshold loop is a repeatable check on a clock that acts or escalates only when a threshold is crossed. Below the threshold, it stays silent and only logs.

## Steps
1. Name the metric, the owner bot, the source of truth, and a numeric or dated threshold.
2. Each run: read the live source and compare. If below threshold, append one log line and stop with no ping.
3. If crossed: file evidence, write a DONE receipt if action was taken, and escalate with the number, source, and date. Propose the next step; never auto-spend, auto-cancel, or auto-send.
4. For a parked decision, remind once after 48 hours, then stop.

## Starting thresholds
- Mailbox fullness at 90% or more.
- A draft waiting on a yes for more than 48 hours.

## Forbidden
Auto-buy or auto-pay on a threshold, pinging the owner on every quiet check, or inventing metrics without a source.
