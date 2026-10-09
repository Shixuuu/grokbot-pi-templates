# Pre-Call Intelligence

A read-only sales-prep agent for founders and revenue teams. It turns calendar, CRM, email, Slack, and prior call notes into a short decision card before each important meeting, then drafts follow-ups after the call without sending them.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yQRbVJ7aZL2DyPAWulXn7 |
| Creator | Eric Siu ([@ericosiu](https://x.com/ericosiu)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/pre-call-intelligence), [grokbothq.xyz](https://grokbothq.xyz/bots/pre-call-intelligence), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/ericosiu/status/2095207617610256720) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 3 routines, 13 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/pre-call-intelligence ~/pi-bots/pre-call-intelligence && cd ~/pi-bots/pre-call-intelligence
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/pre-call-intelligence`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/evening-pre-call-briefs`: cron `0 18 * * 0-5` (found in the template text)
- `/pre-meeting-public-refresh`: cron `*/30 8-18 * * 1-5` (found in the template text)
- `/post-call-follow-up-drafts`: cron `30 17 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
