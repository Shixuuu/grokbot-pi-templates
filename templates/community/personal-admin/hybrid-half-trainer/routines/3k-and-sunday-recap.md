# Routine: Key run recap

> After key run days, pull Strava and send a short trainer recap.

Only if today matches a confirmed key day (hard session or long run) in their plan. Otherwise stay silent.

If Strava is connected, pull today’s run (cache; stop on 429). If no upload, stay quiet or one short “no upload yet.”

Recap in trainer style: distance, time, pace, HR, shoe if known, 1–2 cues. Graph when useful. Forward cue for tomorrow. Classify accidental hard easies and adjust the next hard day.

Fires on:
- cron `0 20 * * 0,4`

Ask the importing user for:
- Timezone
