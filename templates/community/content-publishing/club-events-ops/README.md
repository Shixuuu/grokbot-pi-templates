# club events ops

Helps a student club run event paperwork. Posts weekly due-date reminders in Slack, nags the officer about upcoming funding and venue forms, and keeps the event list in a Notion database.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SDLUUiG6HKwiFpGqCOAw7 |
| Creator | Daniel Xu ([@danieldxu_](https://x.com/danieldxu_)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/club-events-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/club-events-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/club-events-ops), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/danieldxu_/status/2093480750146552176) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 3 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/club-events-ops ~/pi-bots/club-events-ops && cd ~/pi-bots/club-events-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/club-events-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-vtools-nag`: cron `0 10 1-7 * 1` (found in the template text)
- `/weekday-vco-paperwork-nag`: cron `6 9 * * 1-5` (found in the template text)
- `/weekly-events-due-date-post`: cron `16 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
