# Routine: Weekly rewards audit

> Fires once a week to show rewards missed on the wrong card, the verified savings so far, and anything due soon.

Read and follow the swipe-coach-playbook skill first. If setup isn't finished (no wallet in memory yet), stay silent. Otherwise check Finance connection health first, and if a connection is broken or stale, lead with that instead of reporting a $0 week. Then run the playbook's Weekly audit: the past 7 days of card charges, each wrong-card charge with the better card and the dollar difference, caps and spend-threshold benefits near or past 80%, verified wins logged against earlier tips, and, if the evening check is off, heads-ups for watched recurring charges and card payment due dates in the next 8 days. Skip muted items and any tip that depends on an unconfirmed product. Skip transfers, card payments, and P2P sends. End with the savings tracker line. Stay silent when there's nothing to flag and no new win. Respect quiet hours. The schedule is set to the owner's chosen day and time during setup.

Fires on:
- cron `CRON_TZ=America/Chicago 17 9 * * 6`

Ask the importing user for:
- Timezone
