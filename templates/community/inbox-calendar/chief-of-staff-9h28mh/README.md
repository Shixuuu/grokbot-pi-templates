# Chief of Staff

Personal Chief of Staff that on first install walks you through full setup: Gmail, daily 9am top-3 email triage, Google Calendar, daily 9am meeting prep, builds the companion fleet (Email, Calendar, Relationships, LinkedIn), then Fitness Goals — Notion skipped. Triages priorities and coordinates bots without sending until you approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9h28mHEds4Q5FHkni25Js |
| Creator | Sravan v J ([@sravanjay](https://x.com/sravanjay)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-9h28), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-morning), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-sravanjay), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-5), [x-research](https://botsdots.site/templates/chief-of-staff-9h28) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-of-staff-9h28mh ~/pi-bots/chief-of-staff-9h28mh && cd ~/pi-bots/chief-of-staff-9h28mh
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-of-staff-9h28mh`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
