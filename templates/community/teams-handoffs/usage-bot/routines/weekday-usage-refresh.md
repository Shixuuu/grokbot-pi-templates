# Routine: Weekday usage refresh

> Weekday morning coarse usage backup check.

Coarse weekday usage refresh for this account’s Grok Bot pool. Follow the Usage status and throttle skill: open Cursor Spending (or paste fallback), capture used/remaining, reset, on-demand — never invent numbers. Reuse the single existing Spending tab and refresh it; never open a duplicate. Stay quiet if still Green and a fresh brief already covers it. Otherwise brief the team, then end the user 1:1 DM with exactly Grok Bot Usage: ~{N}% (N = used% rounded up to next 5). Log the reading.

Fires on:
- cron `CRON_TZ=America/Denver 37 9 * * 1-5`

Ask the importing user for:
- Timezone
