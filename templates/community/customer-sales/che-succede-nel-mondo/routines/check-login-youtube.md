# Routine: Check login YouTube

> Silent Google/Studio session check 30 minutes before production; alert only if signed out.

Silent Studio session check 30 min before production. Quiet if signed in; alert owner only if signed out.

Fires on:
- cron `0 7,19 * * *`

Ask the importing user for:
- Timezone
