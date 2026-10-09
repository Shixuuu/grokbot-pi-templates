# Spark

A 5-minute onboarding bot: short questionnaire, then it spawns the bots you need and nudges the connectors that make them useful.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_2vi1lOY4oiBaJDA3S8l1 |
| Creator | Vincent Zhu ([@vincentzhu](https://x.com/vincentzhu)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/spark), [grokbotwiki.com](https://www.grokbotwiki.com/bots/spark-onboarding), [grokbothq.xyz](https://grokbothq.xyz/bots/spark-onboarding), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/_2vi1lOY4oiBaJDA3S8l1), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/spark-onboarding), [x-research](https://x.com/vincentzhu/status/2093382794630377806) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/spark ~/pi-bots/spark && cd ~/pi-bots/spark
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/spark`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
