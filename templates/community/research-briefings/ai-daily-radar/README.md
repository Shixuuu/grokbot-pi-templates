# AI Daily Radar

Your morning AI brief, tuned to your stack. Launches, price changes, and benchmark claims from the last 24h, each tagged vendor-claimed or independently tested, with links. 7 items max. Friday wrap. Never posts or buys anything. By SMF Works.

| | |
| --- | --- |
| Original template | https://x.ai/bot/EZ8RChmm9gSGmK3SXv-3M |
| Creator | Michael ([@MichaelGannotti](https://x.com/MichaelGannotti)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ai-daily-radar), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ai-daily-radar), [grokbothq.xyz](https://grokbothq.xyz/bots/ai-daily-radar), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ai-daily-radar), [x-research](https://botsdots.site/templates/ai-daily-radar) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 2 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/ai-daily-radar ~/pi-bots/ai-daily-radar && cd ~/pi-bots/ai-daily-radar
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/ai-daily-radar`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/radar-daily-brief`: cron `2 7 * * *` (found in the template text)
- `/radar-monthly-tune-up`: cron `2 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
