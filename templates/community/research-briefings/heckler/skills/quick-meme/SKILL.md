---
name: quick-meme
description: "Use this when you need a fast, free meme image (classic template plus custom text) without generating an image from scratch."
---

# Quick meme (memegen.link, no key)

1. **Pick a template key** that matches the shape of the joke. Common keys: `drake` (prefer B over A, 2 lines), `ds` (two buttons, 3), `db` (distracted boyfriend, 3), `fine` (this is fine, 2), `gb` (expanding brain, 4), `cmm` (change my mind, 1), `exit` (off-ramp, 3), `pigeon` (is this a…, 3), `same` (same picture, 3), `harold` (hide the pain, 2), `rollsafe` (2), `spongebob` (mocking, 2), `spiderman` (pointing, 2), `stonks` (2). Full list: `curl -s https://api.memegen.link/templates/` (fields `id`, `lines`). Cache it; don't fetch it for every meme.
2. **Write the text.** Keep each line to 6 words or fewer and under 200 bytes. Send at most `lines` lines, because extras are dropped silently.
3. **Render.** POST the raw text so the server handles escaping:
   ```bash
   curl -s -X POST https://api.memegen.link/images/ -H 'Content-Type: application/json' \
     -d '{"template_id":"fine","text":["Bot: task done","Tests: still failing"],"extension":"png"}'
   ```
   The response is `{"url": "https://api.memegen.link/images/..."}`. You can also build the URL by hand: `https://api.memegen.link/images/<key>/<line1>/<line2>.png`, with `_` for a space, `__` for `_`, `--` for `-`, `~q` for ?, `~a` for &, `~p` for %, `~h` for #, `~s` for /, `~n` for a newline, `''` for ", and `_` alone for a blank line.
4. **Save and verify:** `curl -sL -o /path/meme.png "<url>"` (always use `-L`), then `test -s /path/meme.png`.
5. **Send:** put the URL on its own line, or attach the saved file.
6. **Options:** `?width=800`, `?layout=top`, `?font=impact`, `?color=white,black`. An unknown style or font returns 422, and an unknown key returns 404.
7. **Fallback:** if no template fits or the API is down, use an image generator.

Notes: free, and no account needed. The output has a small "Memegen.link" watermark. Template images are third-party memes, so keep use personal and non-commercial. Imgflip `caption_image` is an alternative, but it needs an Imgflip account (username and password), so get the owner's approval before creating one.
