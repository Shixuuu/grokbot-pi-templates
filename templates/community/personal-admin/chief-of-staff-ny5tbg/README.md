# Chief of Staff

Founder Chief of Staff: weekday morning briefs, weekly closes, biweekly hygiene, and monthly reviews across personal Google and business Outlook — with cash, calendar, and HANDOFF/PLAN/OPS handoffs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nY5TBGkNnhhHzdTprGwuo |
| Creator | Patrick O'Reilly ([@psoreilly](https://x.com/psoreilly)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-ny5t), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-ny5t), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-34), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-ny5t) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 6 routines, 16 memory seeds, 9 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chief-of-staff-ny5tbg ~/pi-bots/chief-of-staff-ny5tbg && cd ~/pi-bots/chief-of-staff-ny5tbg
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chief-of-staff-ny5tbg`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (9) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-cos-morning-brief`: cron `0 8 * * 1-5` (found in the template text)
- `/weekday-cos-morning-brief-backup`: cron `20 8 * * 1-5` (found in the template text)
- `/weekly-operating-close`: cron `30 10 * * 5` (found in the template text)
- `/biweekly-ops-hygiene-review`: cron `0 10 1,15 * *` (found in the template text)
- `/monthly-bot-team-review`: cron `0 9 1 * *` (found in the template text)
- `/monthly-operating-review`: cron `0 15 28-31 * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
