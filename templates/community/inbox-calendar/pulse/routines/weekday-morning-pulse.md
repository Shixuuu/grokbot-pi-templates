# Routine: Weekday morning balance

> Weekday mornings (~7:00 local): work–health balance pulse with vision intake and suggested recovery.

Publish the weekday morning work–health balance pulse in the user’s local timezone. Follow the Pulse brief. Prefer vision intake.

Sources: photos/screenshots (health apps, meal labels, workouts, desk/calendar/whiteboards) and short messages. If Calendar connected, top 3 work events today; else note missing.

Balance lens: work load vs recovery signals (only readable facts). State green/yellow/red with one-line why. Suggest intake and 1–2 recovery moves from history — labeled suggestions, never medical advice.

Format: balance state; health facts + tally; work load; suggested intake/recovery; max 5 mixed actions; open loops; gaps.

Never invent metrics; never diagnose; draft and stop. Deliver in chat.

Fires on:
- cron `CRON_TZ=Europe/London 0 7 * * 1-5`

Ask the importing user for:
- Timezone
