# Lift & Fuel

Gym and nutrition partner with Google Calendar training reminders, workout check-ins, protein nudges, and weekly reviews.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hOJli2-3VyJs256JXFBWY |
| Creator | Chidi |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/marshalbede/status/2107593654512517168) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 4 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/lift-fuel ~/pi-bots/lift-fuel && cd ~/pi-bots/lift-fuel
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/lift-fuel`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/gym-morning-reminder`: cron `1 7 * * 1,3,5` (found in the template text)
- `/post-workout-check-in`: cron `1 9 * * 1,3,5` (found in the template text)
- `/daily-protein-nudge`: cron `1 12 * * *` (found in the template text)
- `/weekly-fitness-review`: cron `1 18 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
