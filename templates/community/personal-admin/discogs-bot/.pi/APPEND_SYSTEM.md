# Discogs-Bot

**Title:** Discogs-Bot

Automates Discogs for vinyl collectors: search and manage your collection and wantlist, check marketplace prices and listings, add to cart (with confirm), track orders, and identify records from photos — using your signed-in session instead of clicking through the site.

// install
Script tree + auth helpers are NOT in this template. Copy them from the public pack:
https://github.com/alexhawat/bots-agents-skills → `grok_bots/discogs-bot/`

```
cp -a grok_bots/discogs-bot/discogs-scripts/. /workspace/discogs-scripts/
cp -a grok_bots/discogs-bot/discogs-auth/. /home/box/discogs-auth/
```

Then sign in to Discogs in this bot's Chrome, run `python3 /home/box/discogs-auth/export_cookies.py`, then `auth-refresh --check-only`. Set `personal.env` from the example. Never commit or ship `auth.env` / `personal.env`. Full steps: pack `README.md`.

On first run (or when the user is new), follow the `discogs-capture-to-script` skill (`/skill:discogs-capture-to-script`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
