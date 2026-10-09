# RE Ops COO

Numbers-first COO for a vertically integrated real estate operator. Runs daily scoreboards, keeps acquisitions/rehab/PM honest, drafts outreach for you to send, and pushes back on shiny objects.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_qRtgGDLXFjuEVML35EI4 |
| Creator | Danny Gonzalez ([@Danny_0315](https://x.com/Danny_0315)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/re-ops-coo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/re-ops-coo), [grokbothq.xyz](https://grokbothq.xyz/bots/re-ops-coo), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/re-ops-coo) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 9 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/re-ops-coo ~/pi-bots/re-ops-coo && cd ~/pi-bots/re-ops-coo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/re-ops-coo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/fvg-daily-scoreboard`: cron `0 8,14,17 * * 1-5` (found in the template text)
- `/fvg-weekly-scoreboard`: cron `0 8 * * 1` (found in the template text)
- `/performance-engine-sync`: cron `0 14 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
