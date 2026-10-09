# intel scout

Twice-daily brief from inbox, Slack, and meeting notes. Digests what you saw and didn’t — company context that affects you, open follow-ups, and what’s useful for upcoming meetings. Source → Why → Do-this; skips telling you to do what you already own.

| | |
| --- | --- |
| Original template | https://x.ai/bot/TuRdVfJIJ2t0O8-jQm4ah |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/intel-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/intel-scout), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/joshkim/status/2095633918611636627) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/intel-scout ~/pi-bots/intel-scout && cd ~/pi-bots/intel-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/intel-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/intel-am-pm`: cron `0 8,17 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
