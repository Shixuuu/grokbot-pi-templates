# Routine: Daily news scan (quiet)

> Fires every morning to update the story tracker quietly so the weekly briefing has a full week of notes.

Quiet daily scan for News Brief. Update /home/box/lasting-news/stories.jsonl only; send the owner nothing.

Sources, every scan:
- Wires: AP, and Reuters via Google News RSS.
- Right-leaning: Fox News, New York Post (use Google News if its feed is empty), WSJ free headlines, Washington Examiner, National Review, Reason, The Free Press, The Dispatch.
- Center and left-leaning: major national papers and broadcasters, NPR, and similar outlets.
- International: BBC, Al Jazeera, The Guardian, and similar.
- X via the X connector, if connected: a few targeted searches only, since calls cost credits.
- Reddit weekly top Atom RSS for major news subreddits, with a browser user agent and 2-second gaps.

For each story, keep one tracker entry with its first-seen date, dated status notes, sources seen, and claims circulating. Aim to log at least one right-leaning source, one center or left-leaning source, and one wire or international source per story. Add new stories, add a dated note to continuing ones, and mark a story dropped when coverage and relevance fade. Back up the file before editing and make sure every line still parses. If a source like Reddit or X fails, note it and use other sources. Do not send the owner any digest or alert.

Fires on:
- cron `CRON_TZ=America/Chicago 56 9 * * *`

Ask the importing user for:
- Timezone
