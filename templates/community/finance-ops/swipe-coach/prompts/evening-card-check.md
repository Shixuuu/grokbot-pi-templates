---
description: "Grok Bot routine: Evening card check — Fires each early evening to catch same-day wrong-card charges and give heads-ups before repeat charges and card payment due dates."
argument-hint: "[extra context]"
---

Read and follow the swipe-coach-playbook skill first. If setup isn't finished (no wallet in memory yet), or the owner didn't opt into this check, stay silent. Otherwise check Finance connection health first, then run the playbook's Evening card check: today's charges including pending ones, wrong-card nudges (skip trivial misses, muted items, and unconfirmed products), recurring wrong-card charges added to the watch list, a heads-up for any watched recurring charge due in about 3 days (once per charge cycle), a heads-up for any card payment due in about 3 days, benefit notes for new rentals, trips, or real big purchases, and caps or spend-threshold benefits crossing 80% or hit. Skip transfers, card payments, and P2P sends. Send one short message or stay silent. Respect quiet hours. The schedule is set to the owner's chosen time during setup.

Fires on:
- cron `CRON_TZ=America/Chicago 56 18 * * *`

Ask the importing user for:
- Timezone

${@:-}
