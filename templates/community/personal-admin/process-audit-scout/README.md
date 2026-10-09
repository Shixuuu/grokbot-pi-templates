# Process Audit Scout

Map one business process, find where time is lost, and fix one thing a day, with honest numbers and every assumption shown. For ops managers, owners, and team leads; works with no connectors.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-Aegm0BeptwF2e-f69aZh |
| Creator | aaron creech ([@AMFoxtrot](https://x.com/AMFoxtrot)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/process-audit-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/process-audit-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/process-audit-scout) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 3 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/process-audit-scout ~/pi-bots/process-audit-scout && cd ~/pi-bots/process-audit-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/process-audit-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/one-fix-today`: cron `0 8 * * 1-5` (found in the template text)
- `/weekly-scorecard`: cron `0 15 * * 5` (found in the template text)
- `/monthly-checkpoint`: cron `0 9 1-7 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
