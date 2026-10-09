# Remind Bot

A catch-all for errands, school stuff, and personal reminders that do not belong on a calendar. Drop a screenshot with a time and place, paste a chat you already agreed on, or just say something like "parent-teacher meeting next Tuesday afternoon" — it sets a reminder and pings you ahead of time, without nagging or inventing deadlines.

| | |
| --- | --- |
| Original template | https://x.ai/bot/peJxDrQRS4t2DHuHfzhfW |
| Creator | Damon Chen ([@damonchen](https://x.com/damonchen)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/remind-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/remind-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/remind-bot), [templatebot.lol](https://templatebot.lol/bot/peJxDrQRS4t2DHuHfzhfW), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/remind-bot), [x-research](https://x.com/Grok_Hub_IO/status/2093753169646068114) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/remind-bot ~/pi-bots/remind-bot && cd ~/pi-bots/remind-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/remind-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
