# Routine: Launch-window watch

> Tighter checks around an open launch window; quiet unless the window or attempt state changes.

Launch-window watch for the current/next Starship attempt near an open window. Check primary public sources more often for window slips, scrub/hold, T-0 changes, liftoff, and early results. Stay silent if nothing material changed. On a material change: update status JSON honestly and ping the owner with “What changed.” After attempt outcome or new official NET, roll forward. Never invent.

Fires on:
- cron `CRON_TZ=America/New_York 1,31 6-23 * * 0,1`

Ask the importing user for:
- Timezone
