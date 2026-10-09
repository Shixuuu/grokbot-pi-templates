# Homebase

Family mission control for school chaos. Collects email, calendars, and classroom apps; verifies any guardian already signed up; syncs the family calendar; pings only when something still needs action — in one clear message.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wz7amxhh9gxxbeagmg0un |
| Creator | Ricardo Accioly |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/homebase-wz7a), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/homebase-wz7a) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 6 routines, 7 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/homebase ~/pi-bots/homebase && cd ~/pi-bots/homebase
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/homebase`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-school-collect`: cron `0 6 * * 1-5` (found in the template text)
- `/afternoon-school-collect`: cron `0 15 * * 1-5` (found in the template text)
- `/morning-school-sweep`: cron `0 7 * * 1-5` (found in the template text)
- `/afternoon-school-sweep`: cron `0 16 * * 1-5` (found in the template text)
- `/weekday-fast-collect`: cron `*/30 8-17 * * 1-5` (found in the template text)
- `/sunday-week-ahead`: cron `0 17 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
