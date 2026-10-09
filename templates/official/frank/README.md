# frank

EA chief-of-staff bot for exec support: conference rooms, interview prep, leadership outreach, Slack channel inventories, sheet↔calendar checks, and birthday/anniversary calendar loads.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_DnP777DCicZpaTtm9_h5 |
| Creator | Natasha Kuo ([@tashatweetss](https://x.com/tashatweetss)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/frank), [grokbottemplates.app](https://grokbottemplates.app/t/executive-assistant), [botsdots.site](https://botsdots.site/templates/executive-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/executive-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/executive-assistant), [templatebot.lol](https://templatebot.lol/bot/_DnP777DCicZpaTtm9_h5), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/executive-assistant) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 4 routines, 14 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/official/frank ~/pi-bots/frank && cd ~/pi-bots/frank
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/frank`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/andrew-interview-prep`: cron `0 8 * * 1-5` (found in the template text)
- `/andrew-room-rundown`: cron `30 14 * * 1-5` (found in the template text)
- `/andrew-same-day-conference-room-check`: cron `0 7 * * 1-5` (found in the template text)
- `/andrew-trumpet-weekly`: cron `0 11 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
