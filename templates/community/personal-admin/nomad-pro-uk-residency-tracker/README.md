# Nomad Pro – UK Residency Tracker

The boring UK residency admin, managed for you: a day-by-day travel and work log with records, measured against HMRC's Statutory Residence Test figures and visa stay limits, with a travel concierge for your next move as a bonus. Record-keeping, not advice; free for Grok users.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QUBmv77N0RIAlXTUktubY |
| Creator | Komal Amin |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/nomad-pro-uk-residency-tracker-qubm), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/nomad-pro-uk-residency-tracker-qubm) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 17 skills, 6 routines, 12 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/nomad-pro-uk-residency-tracker ~/pi-bots/nomad-pro-uk-residency-tracker && cd ~/pi-bots/nomad-pro-uk-residency-tracker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/nomad-pro-uk-residency-tracker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (17) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nomad-pro-check-in`: cron `5 21 * * *` (found in the template text)
- `/weekly-travel-rules-watch`: cron `5 9 * * 1` (found in the template text)
- `/weekly-hmrc-guidance-watch`: cron `5 9 * * 3` (found in the template text)
- `/end-of-week-calendar-review`: cron `5 18 * * 0` (found in the template text)
- `/year-end-lockdown`: cron `5 10 7 4 *` (found in the template text)
- `/monthly-records-backup`: cron `5 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
