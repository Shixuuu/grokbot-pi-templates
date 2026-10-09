# Travel Steward

A travel steward for trips, flights, stays, and day-of logistics. Runs a daily travel monitor that turns booked plans into practical checks and short-lived follow-ups, and suggests places to eat or go based on your preferences.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WNoawju9U2WDwe2yPxGjO |
| Creator | Stephen Benjamin ([@stbenjam](https://x.com/stbenjam)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/travel-steward), [grokbotwiki.com](https://www.grokbotwiki.com/bots/travel-steward), [grokbothq.xyz](https://grokbothq.xyz/bots/travel-steward), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/travel-steward), [x-research](https://botsdots.site/templates/travel-steward) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 7 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/travel-steward ~/pi-bots/travel-steward && cd ~/pi-bots/travel-steward
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/travel-steward`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/ecuador-daily-whereabouts-and-vegan-food`: cron `8 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
