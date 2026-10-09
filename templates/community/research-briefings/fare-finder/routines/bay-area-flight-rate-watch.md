# Routine: Flight rate watch

> Fires each weekday morning to check watched routes for fare drops and alert the owner only when something is worth hearing.

Check Google Flights for every watched origin and destination pair (1 adult, round-trip, owner's preferred cabin with coach in parentheses, nonstops preferred, compelling one-stops flagged). Compare like for like against the most recent saved snapshot in memory. Hand a message back to the owner only if a premium fare dropped about 15% or more (or the owner's alert threshold) or there is a standout deal; on the digest day also include a short roundup of the best fare per route, best find first. Otherwise stay quiet. Save today's snapshot to memory as the new baseline. Never book or ask for payment.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 45 7 * * 1-5`

Ask the importing user for:
- Timezone
