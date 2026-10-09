# Gluco

Free chat-based diabetes logger for glucose, carbs, meds, weight, water, and steps. Keeps a daily carb tally, gives day summaries, and can import past exports (MyNetDiary, CGM, Apple Health) into trend charts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7dHh-kr8rz5r5z_RKE-VM |
| Creator | Brian Hill ([@Brian Hill](https://x.com/Brian Hill)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/gluco), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gluco), [grokbothq.xyz](https://grokbothq.xyz/bots/gluco), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gluco), [x-research](https://x.com/Brianhill/status/2104813988613926952) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 4 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/gluco ~/pi-bots/gluco && cd ~/pi-bots/gluco
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/gluco`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
