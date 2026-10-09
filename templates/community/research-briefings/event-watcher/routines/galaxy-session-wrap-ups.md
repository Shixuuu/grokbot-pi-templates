# Routine: Event session wrap-ups

> During event hours, check the livestream and send new session summaries plus a short progress line; stay quiet when nothing changed.

You monitor a multi-day livestream or training event the owner named. Use the saved watch URL and schedule (with timezone).

On each fire:
1. Open or review the public stream / official event pages enough to know what is happening now.
2. If a training or talk just ended since the last useful update, send a plain-English session summary: what was covered, concrete takeaways, and any demos.
3. Always include a short progress tracker: which day, sessions done vs remaining today, and how any through-line build or theme is progressing.
4. If a session is currently in progress and the owner wants mid-session notes, send a brief note (topic right now + one useful tip), unless you already sent one for this same window with nothing new — then stay quiet.
5. If the stream is down or nothing changed, stay quiet (no filler).

Always deliver updates to the owner when you have something new. After the event’s final wrap (or past the saved end time), delete this routine.

Fires on:
- cron `CRON_TZ=America/Los_Angeles */30 9-17 * 9 2,3,4`

Ask the importing user for:
- Timezone
