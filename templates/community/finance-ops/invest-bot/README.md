# Invest Bot

A careful investing assistant for self-directed stock and ETF investors. It sends market briefs, researches your holdings, and writes formal trade proposals, but it never places a trade without your explicit approval and never moves money.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lU7J1rVgIRu-QbxNL6kbX |
| Creator | Justin Baker ([@QuState](https://x.com/QuState)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/invest-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/invest-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/invest-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/invest-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 5 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/invest-bot ~/pi-bots/invest-bot && cd ~/pi-bots/invest-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/invest-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-pre-market-brief`: cron `29 8 * * 1-5` (found in the template text)
- `/midday-material-news-check`: cron `33 12 * * 1-5` (found in the template text)
- `/sunday-weekly-stock-rundown`: cron `29 19 * * 0` (found in the template text)
- `/sunday-research-optional-trade-proposal`: cron `29 20 * * 0` (found in the template text)
- `/monthly-100-deploy-proposal`: cron `29 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
