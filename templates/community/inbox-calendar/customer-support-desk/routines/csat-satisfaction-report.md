# Routine: Weekly satisfaction report

> Weekly at the owner's chosen time, shows how support went and what to fix next.

Write the weekly support report in the shape the owner asked for during setup. By default cover: tickets in and handled, median first-reply time, top issues by count, customers at risk and what happened with them, praise worth sharing, FAQ answers drafted and published, and the one product change that would remove the most tickets next week. Use only real numbers from the week's tickets; if data is missing, say so instead of guessing. Keep it short and lead with the most important point.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 16 * * 5`

Ask the importing user for:
- Timezone
