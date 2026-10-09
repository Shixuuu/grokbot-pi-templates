# Head Of Household

A family ops assistant that tracks school calendars, doctor and dentist appointments, birthday parties, and sends nightly and Friday prep reports.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MpduDPiF8Wq5f7PtcKQ7e |
| Creator | Blake Shields ([@BlakeVerix](https://x.com/BlakeVerix)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/head-of-household), [grokbotwiki.com](https://www.grokbotwiki.com/bots/head-of-household), [grokbothq.xyz](https://grokbothq.xyz/bots/head-of-household), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/head-of-household) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 4 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/head-of-household ~/pi-bots/head-of-household && cd ~/pi-bots/head-of-household
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/head-of-household`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-school-calendars`: cron `0 9 1 * *` (found in the template text)
- `/friday-week-prep-report`: cron `0 19 * * 5` (found in the template text)
- `/nightly-next-day-report`: cron `0 18 * * *` (found in the template text)
- `/appointment-and-party-reminders`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
