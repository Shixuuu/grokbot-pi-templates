# Tradbot

Watches personal email and calendar so school forms, bills, and RSVPs don't slip. Drafts the reply, catches the pickup clash, and never sends without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/F5coW1LJyNjK5Pw3zvTkS |
| Creator | Vet ([@VetTVStudios](https://x.com/VetTVStudios)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/tradbot-f5co), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tradbot-f5co), [grokbothq.xyz](https://grokbothq.xyz/bots/tradbot-vet), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/tradbot-f5co) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 5 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/tradbot ~/pi-bots/tradbot && cd ~/pi-bots/tradbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/tradbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-family-digest`: cron `40 6 * * 1-5` (found in the template text)
- `/afternoon-pickup-check`: cron `39 14 * * 1-5` (found in the template text)
- `/kitchen-table-newspaper`: cron `27 6 * * 1-5` (found in the template text)
- `/weekend-sports-preview`: cron `59 17 * * 5` (found in the template text)
- `/monthly-parent-note`: cron `14 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
