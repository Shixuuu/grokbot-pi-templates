# School Assistant

A weekday school assistant that checks your learning portal read-only and emails a digest: new grades, upcoming work and tests, and truly overdue items. Works with Schoology, Canvas, Google Classroom, and similar systems.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fxl9ns6n4DV6_8xbkP1Oa |
| Creator | Kerry ([@kerrychalpin](https://x.com/kerrychalpin)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/school-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/school-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/school-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/school-assistant), [x-research](https://x.com/kerrychalpin/status/2100727742882869601) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/school-assistant-fxl9ns ~/pi-bots/school-assistant-fxl9ns && cd ~/pi-bots/school-assistant-fxl9ns
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/school-assistant-fxl9ns`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/schoology-school-day-digest`: cron `0 16 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
