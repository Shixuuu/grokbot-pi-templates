---
name: watch-later-ingest
description: "Use this when a Grok Bot needs a durable YouTube Watch Later list and watch History as the click trail: signed-in Chrome, two tabs, no ban path, save and merge JSON so ranking can refresh from real data."
---

Get the user's Watch Later (and watch History) into files that survive the chat. Do it as a signed-in person in Chrome, not as a scraper. The lists plus what they actually clicked are how ranking gets smarter.

## Do not get banned

YouTube Watch Later is not available on the Data API (watchLaterNotAccessible). Scraping, yt-dlp, cookie dumps, InnerTube / youtubei, and undocumented endpoints are how accounts get flagged.

- Use the Grok Bot Chrome profile. The user signs into YouTube themselves.
- Never type a password, never copy cookies, never pass cookies to yt-dlp.
- Never download video bytes. Titles, channel, duration, video id, url only.
- Do not open every video. Stay on the playlist / history listing pages.
- Newest first. Cap each tab at about 200 rows. Do not drain a multi-thousand pile in one sitting.
- Human-paced scroll. Pause between batches. No tight loop, no 15-minute grind, no cron. Refresh is onboarding and on-demand, not a timer.
- If you see Sign in, a captcha, a consent wall, or unusual traffic, stop. Hand the computer to the user. Do not retry harder.
- Logged-out HTML is not their list. Do not save it.

## Onboarding (first run, and every refresh)

Open two tabs in the same signed-in Chrome, then ingest both. Refresh is the same loop, not a different product.

1. Open Chrome on the Grok Bot computer.
2. If YouTube is not signed in, stop and hand the computer: Sign in to YouTube in this Chrome, then hand it back. Resume only after they do.
3. Tab A: https://www.youtube.com/playlist?list=WL — keep Date added (newest). Scroll the newest ~200.
4. Tab B: https://www.youtube.com/feed/history — newest watched. Scroll the newest ~200. This is what got clicked.
5. Write both files immediately. Do not leave either list only in chat.

Page-level browser automation first. If a page defeats it, use the desktop. Never shell-drive Chrome, never CDP, never cookie-DB scraping.

### Watch Later rows

videoId, title, channel, durationSeconds, url (https://www.youtube.com/watch?v=<videoId>), addedAt (ISO if shown, else omit).

### History rows

Same fields, plus watchedAt (ISO if shown, else omit). History means they clicked it, not that it should stay in a Watch Later deck.

## Save it so it is not lost

Chat transcripts vanish. The lists live on the Grok Bot computer.

- Watch Later: /home/box/watch-later/watch-later.json
- History (clicks): /home/box/watch-later/history.json
- Create /home/box/watch-later/ if needed.
- Before overwrite, copy each current file to /home/box/watch-later/snapshots/<name>-<YYYYMMDD-HHMM>.json so a bad pass cannot destroy the archive.
- Merge by videoId. This pass updates matching ids and inserts new ones. Never delete ids that were in the file but not in this scroll. Newest-200 is a window, not the whole pile.
- JSON array of objects with videoId, title, channel, durationSeconds, url, plus addedAt on Watch Later and watchedAt on History. A video may exist in both.
- If a Watch Later ranker is running, also copy the merged Watch Later file to that app's data/watch-later.json.
- Tell the user both paths, new vs already-known, and totals on disk.

## How it becomes adaptive

The files are memory. Ranking should change as they grow. Do not re-open YouTube to rebuild a list you already saved; only refresh the newest window.

Signals, strongest first:

1. History — they clicked it. Drop or bury those ids in Watch Later decks (already watched). Boost channels and title-patterns that show up as watched.
2. Still on Watch Later, never in History — saved, not clicked. Keep in decks; this is the attic to drain.
3. In-app clicks (Watch / Skip / Keep, or a History tab on the ranker site) — explicit intent. Persist those too (do not keep them only in the chat). Let them override title heuristics.
4. Refresh — same two Chrome tabs, merge, re-rank from the combined files. First run is onboarding; later runs are the same onboarding with a merge.

Title/channel heuristics are the cold start only. Once History or in-app clicks exist, those win.

## Fallback only: Google Takeout

Use Takeout when the user asks, or when Chrome ingest cannot run. It is not first-run. Export YouTube playlists and watch history if they go this path. Merge into the same two files. Same snapshot rule.

## After ingest

Rank, swipe, or deal decks from the files. A History tab on the ranker site (what got Watch / Skip / Keep) is the in-app version of the same idea: keep the click trail visible and durable.
