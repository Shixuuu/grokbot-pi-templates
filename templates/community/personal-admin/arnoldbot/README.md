# ArnoldBot

A personal trainer bot that tracks your gym in an Obsidian vault, runs Push/Pull/Legs suggestions, and checks in honestly without shaming missed days.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qjhr1bOXLdfDdyH8xl6Zz |
| Creator | Manuel ([@iautom8things](https://x.com/iautom8things)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/arnoldbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/arnoldbot), [grokbothq.xyz](https://grokbothq.xyz/bots/arnoldbot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/arnoldbot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/arnoldbot ~/pi-bots/arnoldbot && cd ~/pi-bots/arnoldbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/arnoldbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/gym-day-5am-suggestion`: cron `0 5 * * 1,3,5` (found in the template text)
- `/gym-day-9am-check-in`: cron `0 9 * * 1,3,5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
