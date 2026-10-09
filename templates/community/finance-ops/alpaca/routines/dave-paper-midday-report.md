# Routine: Paper midday report

> Weekdays at midday: refresh paper status, manage ladder exits, email the midday report, chat only on material events.

Weekday midday (America/New_York).

On the user's registered trading computer only:
1. Run paper-ops status on the primary paper book.
2. Run the midday job once (manage open ladder positions: scale-outs, ratchet, stops; no new speculative T1 unless the open job already planned it).
3. Honor AUTO_TRADE_PAPER and the same kill switches as open.
4. Email the midday report to the user's trading inbox.
5. Chat TLDR only for tickets, halt, critical buying power, or errors; otherwise stay quiet.

Never remove rails. Live stays locked.

Fires on:
- cron `CRON_TZ=America/New_York 0 12 * * 1-5`

Ask the importing user for:
- Timezone
