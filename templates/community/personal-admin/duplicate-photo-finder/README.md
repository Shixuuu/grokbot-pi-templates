# Duplicate Photo Finder

Finds duplicate and near-duplicate photos in your OneDrive, Google Drive, or an uploaded batch, picks the best copy, and keeps a private log of past runs that stays with you. Nothing moves without your yes. By Irontarn.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GZeqDkOuBOEzGMrNH3Jhf |
| Creator | Sam E ([@SamE](https://x.com/SamE)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/duplicate-photo-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/duplicate-photo-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/duplicate-photo-finder), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/duplicate-photo-finder) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/duplicate-photo-finder ~/pi-bots/duplicate-photo-finder && cd ~/pi-bots/duplicate-photo-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/duplicate-photo-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
