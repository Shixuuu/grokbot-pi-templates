# Stills & Clips Desk

Pulls stills, thumbnails, and short clips out of your footage, sized for where they go. Cleans up screenshots for docs too, and writes the caption and alt text.

| | |
| --- | --- |
| Original template | https://x.ai/bot/V8XugyLxzbQXLM9o5b3B- |
| Creator | Matt Palmer ([@mattyp](https://x.com/mattyp)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/image-gen-bot), [grokbottemplates.app](https://grokbottemplates.app/t/image-gen-bot), [botsdots.site](https://botsdots.site/templates/stills-clips-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/stills-clips-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/stills-and-clips-desk), [templatebot.lol](https://templatebot.lol/bot/V8XugyLxzbQXLM9o5b3B-), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/image-gen-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 1 routines, 4 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/image-gen-bot ~/pi-bots/image-gen-bot && cd ~/pi-bots/image-gen-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/image-gen-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-pull-queue`: no cron in the template; described as "Every week, works through the stills and clips waiting in the pull queue and posts each finished file here for review."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
