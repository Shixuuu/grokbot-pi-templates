---
name: heckler-meme-batch
description: "Use this when rendering one or several roast memes from memegen.link, especially animated GIFs, and you need them fast, verified, and free of the known failure modes."
---

# Heckler meme batch

Pick templates from heckler-meme-library (the catalog: joke shape, line counts, animated or not, do-not-use list). For GIFs that no template covers, use heckler-meme-sources.

## Known failures (learned the hard way)
- Python `urllib` gets a 403 from memegen.link. Use `curl` for both the POST and the download.
- A tiny "Application Error" page (about 567 bytes, HTTP 503) means the server is overloaded, not that the template is broken. It once hit `ds`, `spiderman`, and `gru`, which all pass now. **Make one meme request at a time.** On a 503, wait 30 to 60 seconds and retry.
- `right` and `ptj` time out as GIFs every time, so they're PNG only.
- **Check the HTTP status, not just the size.** A bad custom background returns HTTP 415 with a real-looking 30 to 40 KB gray placeholder GIF.
- Animated renders take 5 to 20 seconds and can reach about 2 MB. Give the download a long timeout (`-m 150`).
- Caption lines beyond a template's line count get dropped silently. A line over 200 bytes gets HTTP 414. An unknown template key gets 404, and an unknown style or font gets 422.

## Steps
1. Put the batch in one list: file name, template, caption lines. Keep lines to 6 words or fewer. Vary templates, and skip anything on the do-not-use list.
2. Render **one at a time**, in sequence. POST the raw text so the server does the escaping:
   ```bash
   u=$(curl -s -m 60 -X POST https://api.memegen.link/images/ -H 'Content-Type: application/json' \
     -d '{"template_id":"fine","text":["line 1","line 2"],"extension":"gif"}' \
     | python3 -c 'import sys,json;print(json.load(sys.stdin)["url"])')
   code=$(curl -sL -m 150 -o name.gif -w '%{http_code}' "$u")
   ```
   Always use `-L`, because some URLs redirect first.
3. Check every file. `$code` has to be 200, the file has to be well over 5 KB (`stat -c %s`), and `head -c 20` must not start with `<!DOCTYPE` or `<html`.
4. On a 503, wait 30 to 60 seconds and retry once. If it still fails, swap to another template with the same joke shape from the library. Fall back to a still PNG only if GIFs keep failing. Use an image generator only for custom art.
5. Save to the memes folder in your notes folder with a clear name (`<batch>-<bot>.gif`) and attach from there. Never send just a link in place of the attachment. If you do include a link, it goes alone in a code block.
6. Don't send a single heckle until every meme in the batch has passed step 3.

## Caption rules
- Match the current mode (heckler-mode-voices). Vulgar captions can swear heavily, but no nudity or sexual imagery in any mode.
- The meme targets the bot. A real person's name may appear only as part of what the bot did, never as the butt of the joke. Leave it out when you can.
- Name the real failure (the file, the count, the excuse) instead of a generic joke.
- Never put a secret, private content, or anything about family, money, or health in a caption.

## Notes
memegen.link is free and needs no key. Output has a small watermark. The template images are third-party memes, so keep use personal and inside the app.
