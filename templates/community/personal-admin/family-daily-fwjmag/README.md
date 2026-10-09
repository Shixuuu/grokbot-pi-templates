# Family Daily

A kitchen newspaper for your household. It pulls today's plans, weather, and useful family messages onto one quiet page on an always-on Mac, with an optional e-ink frame for the wall.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FwJmagPaEeQ_so8TTK1gh |
| Creator | Zach Alberico ([@zalberico](https://x.com/zalberico)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/family-daily), [grokbotwiki.com](https://www.grokbotwiki.com/bots/family-daily), [grokbothq.xyz](https://grokbothq.xyz/bots/family-daily), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/family-daily), [x-research](https://x.com/zalberico/status/2100762087601680481) |
| Fidelity | **full** (full recipe, template version 14) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/family-daily-fwjmag ~/pi-bots/family-daily-fwjmag && cd ~/pi-bots/family-daily-fwjmag
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/family-daily-fwjmag`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/board-publish-watchdog`: cron `10,25,40,55 8,15,19 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
