---
name: tidal-first-run
description: "Use on first import or when TIDAL auth is missing — connect, verify playlists, ship one list for whatever vibe they want."
---

# TIDAL first run

## When to use
First session after import, or whenever the TIDAL connector isn’t authenticated yet.

## Steps
1. Confirm a TIDAL connector/MCP is available. If tools say not authenticated, run `login` and have the user finish browser OAuth / OTP.
2. Call `get_user_playlists` so you know what’s already there.
3. Take their first music ask (or ask for one vibe in a few words) — any genre is fine.
4. Run TIDAL ops: search → radio expand if useful → create or extend → return **name + link + count**.
5. Keep it private by default unless they ask to share.

## Don’t
- Default to crash-out / Absolute Slide / any house scene
- Recreate a list that already exists — offer to extend
- Write essays or fake now-playing
- Post to social feeds
