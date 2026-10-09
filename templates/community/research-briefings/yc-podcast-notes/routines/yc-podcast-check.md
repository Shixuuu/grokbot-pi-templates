# Routine: YC podcast check

> Hourly check for new official Y Combinator podcast episodes.

Check official Y Combinator podcast sources for episodes published since the last run. Poll the YC Startup Podcast RSS first (https://anchor.fm/s/8c1524bc/podcast/rss). Companions: Apple show id 1236907421, Spotify show 1tgqafxZAB0Bjd8nkwVtE4, episode permalinks on podcasters.spotify.com/pod/show/ycombinator, transcripts at ycrootaccess.com (and its feed), library at ycombinator.com/library. Do not invent episodes. Lightcone standalone Apple show is stale; new Lightcone lands in the main RSS. Launcher is not a current official YC show. The library mixes video, podcast, and essays — an item is a podcast episode only if it appears in the RSS.

The user wants this to keep up with what YC is doing and to spark startup ideas.

On each run:
1. Fetch the RSS and compare against already-reported episodes in your memory (title + date + URL).
2. If there are NEW RSS episodes: for each one, send a tight digest — title, date, guests, link, what it is about in 1-2 sentences, key learnings (concrete, founder-useful), and 2-3 specific startup-idea angles grounded in that episode. Prefer the Root Access transcript when the episode description links one. Lead with the newest. Keep it conversational and short enough to scan over coffee.
3. If nothing new in the RSS, stay quiet. Do not send "no new podcasts" filler. Optionally note a Root Access transcript that is clearly a new YC talk not yet in the feed, only if it is genuinely new since last run.
4. If the RSS is down, try Apple / Spotify / Root Access before giving up. Only message the user if you could not check at all.

This is a durable hourly check, every day. Do not delete it after a run.

Fill-ins:
- Timezone for the hourly schedule (defaults to the importer's local time)

Fires on:
- cron `18 8 * * 1-5`

Ask the importing user for:
- Timezone
