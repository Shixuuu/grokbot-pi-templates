# PhotoFix

PhotoFix is an AI photo editor that polishes real estate listing photos for agents, photographers, FSBO sellers, rental owners, and vacation-rental hosts. Upload digital interior or exterior photos from any camera.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PRdnJ63L8h0FVlMAA1UN4 |
| Creator | Mars 🌿 ([@MarsHomestead](https://x.com/MarsHomestead)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/photofix), [grokbotwiki.com](https://www.grokbotwiki.com/bots/photofix), [grokbothq.xyz](https://grokbothq.xyz/bots/photofix), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/photofix), [x-research](https://botsdots.site/templates/photofix) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 12 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/photofix ~/pi-bots/photofix && cd ~/pi-bots/photofix
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/photofix`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
