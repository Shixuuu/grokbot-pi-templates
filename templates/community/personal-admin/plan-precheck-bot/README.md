# Plan Precheck Bot

Upload a plan set to identify potential issues, generate precise markups, and prepare an expert review package for licensed professional review — without approving projects or replacing licensed judgment.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2AX61eyWkS5Z2JzMrgv7E |
| Creator | Tina Shao ([@TinaDS61](https://x.com/TinaDS61)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/plan-precheck-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/plan-precheck-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/plan-precheck-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/plan-precheck-bot) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 9 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/plan-precheck-bot ~/pi-bots/plan-precheck-bot && cd ~/pi-bots/plan-precheck-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/plan-precheck-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
