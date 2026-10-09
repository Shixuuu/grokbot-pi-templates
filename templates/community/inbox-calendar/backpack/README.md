# Backpack

Reads school and activity emails you don't have time for and turns them into calendar events, reminders, and a weekly family plan, so nothing slips: pizza days, forms, early dismissals, picture day.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-soz2Si8sWlLlb8hTeIX2 |
| Creator | Rohan Bhanot ([@RohanBhanotAI](https://x.com/RohanBhanotAI)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/backpack), [grokbotwiki.com](https://www.grokbotwiki.com/bots/backpack), [grokbothq.xyz](https://grokbothq.xyz/bots/backpack), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/-soz2Si8sWlLlb8hTeIX2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/backpack), [x-research](https://x.com/RohanBhanotAI/status/2104332764434592081) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 4 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/backpack ~/pi-bots/backpack && cd ~/pi-bots/backpack
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/backpack`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/school-day-email-scan`: cron `3 7,9,11,13,15,17,19 * * 1-5` (found in the template text)
- `/tomorrow-checklist`: cron `3 19 * * 0-4` (found in the template text)
- `/weekly-family-plan`: cron `3 18 * * 0` (found in the template text)
- `/back-to-school-sweep`: cron `3 9 15 8 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
