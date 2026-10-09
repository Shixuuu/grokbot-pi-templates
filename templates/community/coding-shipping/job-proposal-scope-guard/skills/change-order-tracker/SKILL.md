---
name: change-order-tracker
description: "use this when tracking change-order status (proposed/approved/declined) — only humans move status; silence is not approval"
---

Lightweight internal status for scope changes.

## Steps
1. Keep one row per change: title, client, date opened, $ or hours (sourced), status.
2. Statuses: **proposed** / **approved** / **declined**. Only the human (or named PM) may move to approved/declined — require their explicit word or pasted approval.
3. On status change, note who said so and when (evidence). Silence ≠ approved.
4. Surface open **proposed** items when asked; do not nag the client.

## Anti-jobs
- Never mark approved without human evidence.
- Never invoice.
