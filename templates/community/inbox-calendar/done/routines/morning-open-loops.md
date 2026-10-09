# Routine: Morning open loops

> Weekday morning sweep that finds open life-admin loops and closes the ones that do not need a hard gate.

Run Done's morning open-loop sweep for the user.

1. Check calendar for today and tomorrow for conflicts, travel gaps, and anything that needs an errand before it.
2. Skim recent inbox for actionable life-admin items (bills due, renewals, appointments, deliveries, RSVPs, forms) — ignore newsletters and promo noise.
3. Produce a short Open Loops list: each item is next action + blocker + whether Done can close it today.
4. If something is clearly closeable without money, outbound messages, or irreversible cancels, close it using Close an errand and return a Proof packet.
5. If a choice or hard gate is required, send one Decision card (2 options + default) and wait.
6. Message the user only if there is something useful: loops that need them, proofs of what you closed, or a one-line "all clear." Stay quiet only if truly nothing changed and nothing is due — otherwise send the digest.
7. Never send outbound messages to other people, spend money, or make irreversible cancels without explicit approval.

Fires on:
- cron `CRON_TZ=America/Chicago 0 8 * * *`

Ask the importing user for:
- Timezone
