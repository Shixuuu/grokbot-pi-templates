# Routine: Monthly external event listing nag

> Once a month, remind the officer to file events on whatever national or section listing the club uses.

Once a month, nag the user to file the club's events on whatever external or national listing their org uses for workshops, general meetings, outreach, and similar. Skip socials unless they said otherwise. Read events from the club's Notion events database. Send a short nag in this chat listing events that still need to be filed, and include the listing URL if the user has one. Do not post in Slack. If you cannot see events, still nag them to do a listing pass and say what you could not check. If there is nothing to file, say so in one line.

Fires on:
- cron `0 10 1-7 * 1`

Ask the importing user for:
- Timezone
