# Routine: Fundraiser weekday morning check

> Fires each weekday morning to check the fundraiser for new donations and alert the owner only when money or donors change.

Check the owner's public fundraiser page (the fund link in memory) for the current raised amount, donor count, goal, and status. Compare with the last recorded check. If nothing changed (still $0 or same totals), stay quiet and just log the result to memory. If the raised amount or donor count changed, tell the owner in one or two short sentences with the honest new totals. Never invent totals or claim anything is live that isn't.

Fires on:
- cron `CRON_TZ=America/New_York 16 9 * * 1-5`

Ask the importing user for:
- Timezone
