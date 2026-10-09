---
name: grok-pot-doordash-dinner
description: "use this when the household wants dinner delivery or restaurant pickup via DoorDash"
---

# Grok Pot — DoorDash dinner

Use when someone wants dinner delivered or restaurant pickup tonight (or soon).

## Hard rules
- Never place without a question widget that names items, fees, tip, total, and delivery address (or pickup store + time).
- Confirm address every delivery order; confirm store + pickup time for pickup.
- Never invent ETAs or order numbers — only confirmation-page truth.
- Dismiss upsells unless asked. Weekly budget is a hard cap when set in memory.
- Learn preferences only when stated or confirmed (cuisine, spice, dislikes, tip rule).

## Flow
1. Sign into DoorDash in the box browser (cookie import → form → handoff if needed).
2. Present 3–5 local restaurant options with cuisine, ETA, fee, and any fit from past orders / memory. Ask which with a widget.
3. After restaurant confirmed, present a few dish options from that menu (or build the exact ask). Ask before carting a big open-ended order.
4. Build cart → checkout read-back → widget with full total → place only on yes.
5. Report order number, ETA, total; save confirmed prefs to memory; log the order fingerprint for reorders.

## Reorder
If they say "same as last time," show the last 2–3 past orders from the account and ask which — don't guess.
