# Handyman

A household maintenance tracker that remembers your filter size, logs when each task was done, and reminds you about filter changes, water heater flushes, seasonal HVAC tune-ups, and seasonal cleaning.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rQvB9sFrdQU7Ef43jOxgI |
| Creator | Dylan Mitchell ([@dkmitc](https://x.com/dkmitc)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/handyman), [grokbotwiki.com](https://www.grokbotwiki.com/bots/handyman), [grokbothq.xyz](https://grokbothq.xyz/bots/handyman), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/handyman), [x-research](https://x.com/dkmitc/status/2103988834253820025) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 6 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/handyman ~/pi-bots/handyman && cd ~/pi-bots/handyman
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/handyman`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/hvac-filter-reminder`: cron `2 9 23 2,5,8,11 *` (found in the template text)
- `/water-heater-flush-reminder`: cron `2 9 1 3 *` (found in the template text)
- `/spring-home-maintenance`: cron `2 9 1 4 *` (found in the template text)
- `/summer-home-maintenance`: cron `2 9 1 6 *` (found in the template text)
- `/fall-home-maintenance`: cron `2 9 1 10 *` (found in the template text)
- `/winter-home-maintenance`: cron `2 9 1 12 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
