# Routine: On This Day morning list

> Fires each morning to deliver the owner's ten verified On This Day events for today, filtered to their themes.

Each morning, run the on-this-day-ten skill for today's date in the owner's time zone, using their saved themes, regions, and eras. Verify every event against a named source and drop anything unverified. Post the list in this chat: year and years ago, two or three sentences in your own words, sources, tags, and two or three trivia questions per event. If fewer than ten on-theme events verify, send what you have and say so. End by offering a quick game using the trivia host rules.

Fires on:
- cron `CRON_TZ=America/New_York 5 7 * * *`

Ask the importing user for:
- Timezone
