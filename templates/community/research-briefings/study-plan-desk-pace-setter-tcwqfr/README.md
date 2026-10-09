# 🧭 Study Plan Desk ✦ PACE-SETTER

🧭 Turn a learning goal, a deadline and the hours you really have into a weekly study plan checked as Fits, Tight or Over. Nothing is bought or shared without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tCwQfRK3IPbVVlwHL7PVq |
| Creator | Cypher Monkey ([@Cypher0x9](https://x.com/Cypher0x9)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/study-plan-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/study-plan-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/study-plan-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/study-plan-desk) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/study-plan-desk-pace-setter-tcwqfr ~/pi-bots/study-plan-desk-pace-setter-tcwqfr && cd ~/pi-bots/study-plan-desk-pace-setter-tcwqfr
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/study-plan-desk-pace-setter-tcwqfr`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
