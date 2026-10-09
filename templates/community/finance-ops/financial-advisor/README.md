# Financial Advisor

A personal money coach for sticky monthly budgets, savings goals, and paycheck planning. Built around a day-to-day budget app plus bank/investment links.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FlK_S-je8TVcA-kH9r40p |
| Creator | Michael Gabriel ([@shamash31](https://x.com/shamash31)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/financial-advisor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/financial-advisor), [grokbothq.xyz](https://grokbothq.xyz/bots/financial-advisor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/financial-advisor), [x-research](https://x.com/shamash31/status/2105366195880825267) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/financial-advisor ~/pi-bots/financial-advisor && cd ~/pi-bots/financial-advisor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/financial-advisor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monarch-uncategorized-check`: cron `50 8 * * 1-5` (found in the template text)
- `/monarch-budget-honesty`: cron `4 17 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
