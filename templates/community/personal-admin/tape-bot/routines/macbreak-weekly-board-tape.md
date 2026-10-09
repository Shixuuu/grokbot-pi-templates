# Routine: Primary show watch

> Fires on the owner's chosen schedule to check their primary favorite show/channel and publish a cleaned episode if new.

Check the owner's configured primary podcast or YouTube-channel feed for a new episode (compare against the last-seen source guid).

If no new guid: stay quiet.

If new:
1. Download audio (podcast enclosure or YouTube best audio).
2. Cut ads (and long fluff only if the owner asked).
3. Chapters: if the source already had chapters, keep them and remap timestamps after cuts (keep per-chapter images/URLs when present). If none, add ID3 chapters from content.
4. Show notes: leave the source description as show notes (do not replace with a short summary).
5. Art: if the source is an MP3 podcast with custom show art, keep that art on the episode unless the owner prefers the private-show cover.
6. Full-site publish to the owner's custom RSS host (feed + every episode MP3 + cover + robots + index). Never drop old MP3s. Never publish to another owner's slug.
7. Confirm new MP3 HTTP 200.
8. Tell the owner the episode title and to refresh in their podcast app. Do not paste the feed URL every time unless they ask.
9. Update the last-seen source guid tracker.

Fires on:
- cron `CRON_TZ=America/Chicago 46 19 * * 2`

Ask the importing user for:
- Timezone
