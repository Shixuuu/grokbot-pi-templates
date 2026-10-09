# Cemil

A friendly wear-log assistant that remembers what you wore, when, and where—so you don’t repeat the same outfit in the same setting too soon. Not a stylist; just a simple log from selfies or text.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vJo5baCNdh3N0Swpe5539 |
| Creator | gorchbey2 ([@gorchbey2](https://x.com/gorchbey2)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/cemil), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cemil), [grokbothq.xyz](https://grokbothq.xyz/bots/cemil), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/cemil) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/cemil ~/pi-bots/cemil && cd ~/pi-bots/cemil
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/cemil`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
