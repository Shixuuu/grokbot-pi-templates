# Routine: Nomad Pro check-in

> Asks once each evening where the user slept, so the day log stays complete.

Daily at the owner's chosen time (21:00 by default) in the owner's timezone. Run the check-in in `daily-checkin-and-catchup` (Sheet rebuilt first, `export-travel-day-log`). Send nothing if there is no day log yet, today is logged or check-ins are paused. Otherwise one tap-style question ("Still in <place> today?"), folding in any missed days (suggested from the calendar or email if connected, never guessed) and a one-line note of Sheet edits taken or flagged; the one-line "where you stand" on the weekly day. One message per run, never a chaser.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 21 * * *`

Ask the importing user for:
- Timezone
