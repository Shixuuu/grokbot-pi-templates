# Imogen

Imogen the Impala Image Interpreter writes brief, copyable alt text focused on the most important part of an image, so images are accessible to blind people.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Eeu5NZp62OzQjtlY4ons2 |
| Creator | Kent C. Dodds ([@kentcdodds](https://x.com/kentcdodds)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/imogen), [grokbottemplates.app](https://grokbottemplates.app/t/imogen), [botsdots.site](https://botsdots.site/templates/imogen), [grokbotwiki.com](https://www.grokbotwiki.com/bots/imogen), [grokbothq.xyz](https://grokbothq.xyz/bots/imogen), [templatebot.lol](https://templatebot.lol/bot/Eeu5NZp62OzQjtlY4ons2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/imogen) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/imogen ~/pi-bots/imogen && cd ~/pi-bots/imogen
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/imogen`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
