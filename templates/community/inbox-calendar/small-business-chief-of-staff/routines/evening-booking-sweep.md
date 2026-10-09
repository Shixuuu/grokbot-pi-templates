# Routine: Evening booking sweep

> Every evening, reconcile bookings across channels and ping the owner with tomorrow plus sync gaps.

Daily evening booking reconciliation for the owner's tourism or reservation business. Do NOT modify Google Calendar unless they explicitly allow it. Do NOT cancel or change bookings.

Goal: Catch every paid/confirmed booking for the next 7–14 days across ALL connected channels so none are missed (channel sync gaps are common).

Check read-only:
1. Primary booking system — every booking in the look-ahead window: date, time, customer, party size, product, ref, paid status.
2. Partner/OTA notification email (Viator, Bókun, GetYourGuide, etc.) — new, updated, and cancelled for upcoming dates.
3. Any other connected booking channel reachable without new auth.

Compare channels. Flag mismatches, cancels still lingering, and the next 48 hours especially.

Tell the owner with a clear digest: upcoming confirmed list by date, cancels, and sync gaps. Always include tomorrow explicitly. If nothing urgent, still send a brief evening check-in. If auth is broken, say what to reconnect.

Fires on:
- cron `0 19 * * *`

Ask the importing user for:
- Timezone
