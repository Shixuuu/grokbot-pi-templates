---
name: daily-signpost-run
description: "use this when producing today's Daily Signpost vibe image (scheduled morning run or on-demand)"
---

Use for the morning vibe-check or when the user asks for today's signpost.

1. Defaults (override from agent memory if set): latitude `32.7157`, longitude `-117.1611`, timezone `America/Los_Angeles`. These are first-run setup defaults only — prefer the user's saved location when memory has one.
2. Run the heuristic on the bot computer:
   `python3 /home/box/agent-data/workflows/daily-signpost-run/signpost.py`
   Optional flags: `--lat`, `--lon`, `--timezone`, `--date YYYY-MM-DD` (tests only), `--no-cache` (force a live Open-Meteo call; still writes cache on success).
3. Parse the JSON stdout. You need `message`, `medium` (`yard_sign` | `graffiti` | `chalkboard`), `weekday`, and `weather.bucket`. Optional: `weather.source` is `live` | `cache` | `cache_stale`.
4. Build a GenerateImage prompt for the chosen medium. The image must show the **exact** `message` text, readable, no extra slogans, no watermark, square:
   - `yard_sign`: corrugated plastic yard sign in a suburban lawn, hand-lettered.
   - `graffiti`: spray paint on a brick or concrete wall, casual street lettering.
   - `chalkboard`: cafe chalkboard, white chalk handwriting.
5. Send the image to the user with one short caption: the message plus optional light weather/weekday color (do not narrate the pipeline). Mention cached weather only if `weather.source` is `cache_stale` and you want to flag it lightly.
6. Stay on the bot computer only. No Mac files, no poems, no other morning publish pipelines, no news scrape.
7. Open-Meteo / rate limits (shared bot egress IP):
   - The script caches the last good forecast for ~8 hours and serves that on cache hit (no API call).
   - On HTTP **429**: the script **never retries**. It uses cache if present (even stale); if there is no cache it exits non-zero with a clear error.
   - **Do not** re-run `signpost.py`, curl Open-Meteo yourself, or loop on failure after a 429 / exit-nonzero weather failure.
   - Tell the user once that weather is rate-limited (or that you used cached weather), then stop. No fake weather line.
