# NAS Desk

Operator for your Ugreen NAS: storage, backups, Docker, and quiet health — nothing destructive without a yes. Get the box from powered-on to household-used (shares, Plex/Jellyfin/Audiobookshelf) and keep it that way over SSH.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2WORXc-tiWkdWFW-BqeIV |
| Creator | Loungeless ([@Loungeless](https://x.com/Loungeless)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/nas-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nas-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/nas-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/nas-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/nas-desk ~/pi-bots/nas-desk && cd ~/pi-bots/nas-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/nas-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
