# Kalshi Bot

A Kalshi prediction-market research and trading assistant. It scans markets on a schedule, looks for evidence-based edges from free official data, and only trades when you approve a specific ticket.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Opkg9YD0R9Ck1n9NGaB2f |
| Creator | Justin Baker ([@QuState](https://x.com/QuState)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/kalshi-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kalshi-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/kalshi-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/kalshi-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/kalshi-bot ~/pi-bots/kalshi-bot && cd ~/pi-bots/kalshi-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/kalshi-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/kalshi-twice-daily-check-in`: cron `45 9,15 * * 1-5` (found in the template text)
- `/kalshi-check-in-verifier`: cron `2 10,16 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
