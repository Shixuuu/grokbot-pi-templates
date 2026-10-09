# Routine: Monthly What's New

> On the first Tuesday of each month, summarizes new Grok Bot features from official sources in five labeled bullets.

This runs every Tuesday but should only act on the FIRST Tuesday of the month: if today's day of month is 8 or later, end quietly with no message. Otherwise, search official Grok Bot sources (the official guides at x.ai/bot/guides and official announcements) for new features from the past month and send the owner a 5-bullet summary in plain words. Label each bullet "from official docs" or "reported" (for anything not confirmed in official sources). Remind them briefly that this coach is unofficial. No election or political content.

Fires on:
- cron `CRON_TZ=America/New_York 59 9 * * 2`

Ask the importing user for:
- Timezone
