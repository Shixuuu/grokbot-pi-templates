# Routine: Morning trend check

> Fires each morning to refresh the bot's sense of which meme formats are trending, so roasts stay fresh without sending the owner a message.

Each morning, check which meme formats and reaction GIFs are trending right now (public web and social sources, no logins). Pick the handful that fit roast jokes, note which memegen.link templates or keyless GIF sources can render them, and save a short dated notes file (YYYY-MM-DD.md) in your trends notes folder. Do not message the owner; this is background prep only. If nothing new is trending, save a one-line note saying so.

Fires on:
- cron `CRON_TZ=America/Toronto 43 7 * * *`

Ask the importing user for:
- Timezone
