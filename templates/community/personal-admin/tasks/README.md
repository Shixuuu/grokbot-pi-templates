# Tasks

Your single daily check-in board: To-Do | Proposed | Upcoming | Recently Completed. Weekdays lean work; weekends lean personal. Lane bots hand short cards here instead of parallel digests.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BcK_tur9AvL1GiGDk3yVg |
| Creator | Nate Nordstrom ([@natenords](https://x.com/natenords)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tasks), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tasks), [grokbothq.xyz](https://grokbothq.xyz/bots/tasks), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/tasks) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 4 routines, 8 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/tasks ~/pi-bots/tasks && cd ~/pi-bots/tasks
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/tasks`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-open-to-dos`: cron `53 8 * * 1-5` (found in the template text)
- `/personal-open-to-dos-weekdays`: cron `8 17 * * 1-5` (found in the template text)
- `/personal-open-to-dos-saturday`: cron `52 7 * * 6` (found in the template text)
- `/personal-open-to-dos-sunday`: cron `54 11 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
