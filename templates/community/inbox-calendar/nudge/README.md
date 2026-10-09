# nudge

A calm personal reminders bot. Tell it what and when, and it pings you in chat when it's due. It puts appointments on your Google Calendar and sends short daily, weekly, and monthly briefs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uM7mhMmiokRwN379jNvsX |
| Creator | gabriel ramans ([@gabrielramans](https://x.com/gabrielramans)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/nudge), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nudge), [grokbothq.xyz](https://grokbothq.xyz/bots/nudge), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/nudge) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 4 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/nudge ~/pi-bots/nudge && cd ~/pi-bots/nudge
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/nudge`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-calendar-brief`: cron `0 8 * * *` (found in the template text)
- `/evening-tomorrow-brief`: cron `0 20 * * *` (found in the template text)
- `/monday-week-brief`: cron `0 8 * * 1` (found in the template text)
- `/monthly-overview-brief`: cron `0 8 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
