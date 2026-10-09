# SpaceX Bot

Tracks SpaceX launches on your calendar and sends a short morning briefing with news from @SpaceX.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LrIjgjuknEyYC4Tbbz0jK |
| Creator | Jess ([@SYQCON95](https://x.com/SYQCON95)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/spacex-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/spacex-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/SYQCON95/status/2100042139136577986) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/spacex-bot ~/pi-bots/spacex-bot && cd ~/pi-bots/spacex-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/spacex-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/spacex-launch-calendar-sync`: cron `45 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
