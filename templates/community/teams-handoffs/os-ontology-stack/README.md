# OS: Ontology Stack

An operational model of your organization that finds and resolves bottlenecks across projects, people, and processes. A team of experts runs diagnostics to help your org get into ideal shape. Like an Oura Ring™ on your organization's finger.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9Uh8RaBqp6PrcOcZjMHbD |
| Creator | Damiano Redemagni ([@damianoredem](https://x.com/damianoredem)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/os-ontology-stack), [grokbotwiki.com](https://www.grokbotwiki.com/bots/os-ontology-stack), [grokbothq.xyz](https://grokbothq.xyz/bots/os-ontology-stack), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/os-ontology-stack), [x-research](https://botsdots.site/templates/os-ontology-stack) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 11 skills, 6 routines, 7 memory seeds, 14 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/os-ontology-stack ~/pi-bots/os-ontology-stack && cd ~/pi-bots/os-ontology-stack
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/os-ontology-stack`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (14) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/etl-scheduler`: cron `0 9,15 * * 1-5` (found in the template text)
- `/daily-digest-dsu`: cron `0 8 * * 1-5` (found in the template text)
- `/weekly-digest-team`: cron `0 9 * * 1` (found in the template text)
- `/monthly-digest-department`: cron `0 9 1 * *` (found in the template text)
- `/quarterly-digest-board`: cron `0 9 1 1,4,7,10 *` (found in the template text)
- `/yearly-digest-shareholders`: cron `0 9 2 1 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
