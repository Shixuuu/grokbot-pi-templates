# Daily Financial Brief

A morning money brief: your linked accounts, market and sector moves, then tech, energy, Fed, and global news.

| | |
| --- | --- |
| Original template | https://x.ai/bot/s2YEW2exxqk-BhcWfGziz |
| Creator | swetha_lochte ([@swetha_lochte](https://x.com/swetha_lochte)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/daily-financial-brief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/daily-financial-brief), [grokbothq.xyz](https://grokbothq.xyz/bots/daily-financial-brief), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/daily-financial-brief), [x-research](https://botsdots.site/templates/daily-financial-brief) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/daily-financial-brief ~/pi-bots/daily-financial-brief && cd ~/pi-bots/daily-financial-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/daily-financial-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-financial-brief`: cron `12 6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
