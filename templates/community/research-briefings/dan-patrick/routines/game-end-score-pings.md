# Routine: Game-end score pings

> Ping when an ENTER TEAMS/LEAGUES HERE event goes final. Stay quiet if nothing new finished.

When a covered event has just gone FINAL, send the result in this chat. Stay quiet if nothing new has finished.

Covered: ENTER TEAMS/LEAGUES HERE

On each run:
1. Look up live public sources (league and team sites, ESPN, NASCAR.com). Do not invent scores. Convert times to the owner's local timezone.
2. Read the already-sent event list on this bot's computer (create it if missing).
3. If a covered game or race is FINAL and its id is not in that file, it is new. Send it.
4. Games: render the 1990s SportsCenter board with this bot's SportsCenter renderer (finals on the right, orange winner tick). Short team names. Races: render the race-results overlay (top 10, pos / driver / car no.) with this bot's race renderer.
5. Send the PNG in chat with one short caption. Lead with the score. Do not dump a text recap of the whole board.
6. Append the new event id(s) to the already-sent list so the next run stays quiet. Id format: YYYY-MM-DD-short-slug.
7. If everything already-final is already logged, or nothing has finished, send nothing. No filler.

This watch runs afternoons, evenings, and weekends because that is when games and races end. Quiet hours overnight are skipped by the schedule.

Fires on:
- cron `17,47 12-23 * * *`

Ask the importing user for:
- Timezone
