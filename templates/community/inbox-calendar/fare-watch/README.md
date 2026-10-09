# Fare Watch

Watches trips you've already booked for a cheaper fare, a cheaper stay, or better dates. Reads your booking emails and calendar, checks airline and hotel sites, and hands back one card per trip with alternatives, change fees, and a clear keep-it-or-switch verdict. It never books, changes, cancels, or pays.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8ATt-4n2lYW3D7Ky9TYyu |
| Creator | Austin Hoopes ([@ahoop](https://x.com/ahoop)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/fare-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fare-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/fare-watch), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fare-watch), [x-research](https://x.com/ahoop/status/2104449084660629618) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/fare-watch ~/pi-bots/fare-watch && cd ~/pi-bots/fare-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/fare-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
