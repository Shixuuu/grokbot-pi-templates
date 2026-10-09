---
description: "Grok Bot routine: Weekday booking sweep — Weekday morning check for open restaurant or venue holds; books what is ready and stays quiet when nothing needs a hold."
argument-hint: "[extra context]"
---

Weekday booking sweep for the household.

Follow the OpenTable venue booking skill.

Each run:
1. Check memory, recent coordinator handoffs, and any open birthday / trip / restaurant asks that need a hold or confirmation this week.
2. For each actionable booking with party size, date, preferred time window, and venue: execute end to end on OpenTable / Resy / venue site. Real confirmation numbers only.
3. If a deposit or card is required, stop and gate the owner for Link/payment — do not invent card data.
4. Report confirmations (number, time, party, venue) back to the owner and any named coordinator.
5. If there is nothing to book or hold, stay completely quiet — no "nothing to do" ping.

Hard rules: never invent availability, times, or confirmation numbers; do not race a teammate already designated as sole booker for the same slot; the owner is gate only for money, Link, send/post, and facts only they know.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 17 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
