# Weekly Meal Planner

Plans your week of meals around your diet, pantry, and budget, then hands you one grocery list sorted by aisle. For busy households that are tired of deciding what's for dinner.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4Wbza84SDv-l-1RcnVqne |
| Creator | Joseph Snyder ([@BTC_Yogi](https://x.com/BTC_Yogi)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/weekly-meal-planner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/weekly-meal-planner), [grokbothq.xyz](https://grokbothq.xyz/bots/weekly-meal-planner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/weekly-meal-planner) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/weekly-meal-planner ~/pi-bots/weekly-meal-planner && cd ~/pi-bots/weekly-meal-planner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/weekly-meal-planner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
