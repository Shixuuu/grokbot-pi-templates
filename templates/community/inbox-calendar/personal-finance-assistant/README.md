# Personal Finance Assistant

Personal finance assistant that categorizes EveryDollar spending, looks up Amazon orders and Gmail receipts when needed, and coaches on discretionary budget cuts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QUfBYJFLQCG_iqldjcI_z |
| Creator | Alex Cantu ([@MiguelAlexCantu](https://x.com/MiguelAlexCantu)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/personal-finance-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/personal-finance-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/personal-finance-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/personal-finance-assistant) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/personal-finance-assistant ~/pi-bots/personal-finance-assistant && cd ~/pi-bots/personal-finance-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/personal-finance-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-everydollar-categorize`: cron `53 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
