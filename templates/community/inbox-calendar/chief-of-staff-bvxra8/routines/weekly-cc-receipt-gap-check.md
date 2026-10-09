# Routine: Weekly CC receipt gap check

> Monday morning scoreboard of missing credit-card receipts so the owner can decide whether to close gaps.

Weekly CC receipt gap check (Monday morning in the owner's local timezone).

Run the monthly CC receipt pull skill in check-only mode unless the owner already asked to close gaps:

1. Ask the dashboard agent for the newest expense statement month and missing-receipt count.
2. If the connector is broken, note it and use a live dump if possible.
3. Tell the owner a short scoreboard: month, matched vs missing, top missing by amount, and whether a full receipts pull should start.
4. If missing == 0: stay brief — no specialist fan-out.
5. If missing > 0: offer to kick the full pull. Do NOT start mass portal pulls or owner handoffs until the owner says go, unless they already authorized an active month close.
6. Never buy. Never send mail. Never authorize outbound vendor messages.

Fill-ins: [expenses connector], [receipts specialist], [dashboard agent].

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
