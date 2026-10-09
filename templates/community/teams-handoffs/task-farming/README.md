# Task Farming

Farms action items from meeting notes and Slack into your task tracker — dedupes, triages, and files clean issues with sources.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MmcPTdwYwr6ebmmZzswYe |
| Creator | Scott Metcalf ([@scottxmetcalf](https://x.com/scottxmetcalf)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/task-farming), [botsdots.site](https://botsdots.site/templates/task-farming), [grokbotwiki.com](https://www.grokbotwiki.com/bots/task-farming), [grokbothq.xyz](https://grokbothq.xyz/bots/task-farming), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/task-farming), [x-research](https://x.com/scottxmetcalf/status/2098802349649387896) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 9 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/task-farming ~/pi-bots/task-farming && cd ~/pi-bots/task-farming
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/task-farming`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/eod-task-farm`: cron `30 17 * * 1-5` (found in the template text)
- `/weekday-trt-digest`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
