# Discogs-Bot

Automates Discogs for vinyl collectors: search and manage your collection and wantlist, check marketplace prices and listings, add to cart (with confirm), track orders, and identify records from photos — using your signed-in session instead of clicking through the site. // install Script tree + auth helpers are NOT in this template. Copy them from the public pack: https://github.com/alexhawat/bots-agents-skills → `grok_bots/discogs-bot/` ``` cp -a grok_bots/discogs-bot/discogs-scripts/. /workspace/discogs-scripts/ cp -a grok_bots/discogs-bot/discogs-auth/. /home/box/discogs-auth/ ``` Then sign in to Discogs in this bot's Chrome, run `python3 /home/box/discogs-auth/export_cookies.py`, then `auth-refresh --check-only`. Set `personal.env` from the example. Never commit or ship `auth.env` / `personal.env`. Full steps: pack `README.md`.

| | |
| --- | --- |
| Original template | https://x.ai/bot/m5xjk7ehnokkf49yf9xuw |
| Creator | Alexandre hawat |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/discogs-bot-m5xj), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/discogs-bot-m5xj) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/discogs-bot ~/pi-bots/discogs-bot && cd ~/pi-bots/discogs-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/discogs-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
