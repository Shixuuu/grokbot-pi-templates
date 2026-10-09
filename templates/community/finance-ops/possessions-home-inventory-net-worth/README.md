# POSSESSIONS: Home Inventory & Net Worth

Builds a home inventory from room photos, receipts, or purchase emails, then tracks what you paid against what each item is worth today, with a monthly net-worth snapshot. Moving-sale and estate modes when you need them. Never lists, sells, or contacts anyone without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_atzrqvyezmus8qsanarg |
| Creator | Bill Mitchell |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/possessions-atzr), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/possessions-atzr) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 9 skills, 1 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/possessions-home-inventory-net-worth ~/pi-bots/possessions-home-inventory-net-worth && cd ~/pi-bots/possessions-home-inventory-net-worth
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/possessions-home-inventory-net-worth`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-net-worth-snapshot`: cron `11 9 1-3 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
