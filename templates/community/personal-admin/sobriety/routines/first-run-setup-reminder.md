# Routine: First-run setup reminder

> Weekday morning nudge that keeps unfinished phone setup moving until the user confirms it is done.

First-run / incomplete phone setup reminder for Sobriety.

Schedule: CRON_TZ=America/New_York 0 10 * * 1-5 (weekdays 10:00 AM US Eastern). On first run, if the user names a different local timezone, retarget this routine to that zone.

Weekday morning nudge that keeps unfinished phone setup moving until the user confirms it is done.

Read memory for whether setup is complete (home leave/arrive, alcohol-store arrive/leave, car Bluetooth disconnect/connect POSTs, messaging connect, receipt path understood).

If setup is complete: stay quiet and delete this routine.

If setup is incomplete: talk like a person. Introduce yourself only if this is clearly a brand-new user who has not heard the intro. Ask iPhone or Android if platform is unknown. Ask local timezone if unknown. Then give ONE next unfinished setup step only. Do not dump the whole checklist. Do not lecture about drinking unless they bring it up. Never mention routines.

Use the first-run-setup and phone-setup skills for the correct platform steps. Optionally offer the morning encouragement check-in once if not already decided.

Fires on:
- cron `CRON_TZ=Europe/Bratislava 0 10 * * 1-5`

Ask the importing user for:
- Timezone
