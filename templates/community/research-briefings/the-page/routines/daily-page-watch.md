# Routine: Daily page watch

> Once a day at 7:00am in the owner's timezone, open each watched page, capture, and ping only if the cared-about thing changed.

Daily watch loop. These are life pages, not office — run all 7 days.

Keep a small list of public URLs (cap 3–5). Each watch is one URL plus an optional note of what "changed" means. The live list is in memory and in this agent's watches/list.json. Captures live under that same watches folder: yesterday's screenshot and a text extract per URL.

If the watch list is empty, stay silent — nothing to check, no all-clear.

For every URL on the watch list:
1. Open it in the browser like a person. Zero connectors.
2. Capture today: screenshot plus text extract. Save under the watches folder, keyed by that URL.
3. Compare today to yesterday's capture.
4. First capture of a URL is a baseline. Save it. Do not ping.
5. If the thing they care about moved (use the watch-for note; if none, a real content change): send the new screenshot and one sentence. Cookie banners, ads, and clocks are not changes.
6. If nothing moved: stay silent. No all-clear. No filler.
7. If the page is down: one line.

Never invent a change you did not see. Stay quiet when nothing changed.

Fires on:
- cron `0 7 * * *`

Ask the importing user for:
- Timezone
