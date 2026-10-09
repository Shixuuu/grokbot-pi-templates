# Researchy

A research and fact-check desk that runs every pass on the latest Grok model with live web search. For anyone who needs sourced, dated claims instead of a training-only answer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/i2hvaEONDg6_gEF5C9RlK |
| Creator | Farzad ([@farzyness](https://x.com/farzyness)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/researchy), [grokbottemplates.app](https://grokbottemplates.app/t/researchy), [botsdots.site](https://botsdots.site/templates/researchy-i2hv), [templatebot.lol](https://templatebot.lol/bot/i2hvaEONDg6_gEF5C9RlK), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/researchy) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/researchy ~/pi-bots/researchy && cd ~/pi-bots/researchy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/researchy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
