# Gimli

Brick / LEGO marketplace store ops: live eBay coverage, BrickLink as inventory system of record, BrickOwl sync when shops are open, and quiet alerts until shipping or buyer action is needed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Gus0sWvCGM8RhHyGED9AF |
| Creator | Stay Hungry ([@RumblinTum](https://x.com/RumblinTum)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/gimli), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gimli), [grokbothq.xyz](https://grokbothq.xyz/bots/gimli), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/gimli) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 7 skills, 3 routines, 13 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/gimli ~/pi-bots/gimli && cd ~/pi-bots/gimli
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/gimli`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bricksonian-ebay-hourly-check`: cron `52 8-21 * * *` (found in the template text)
- `/bricksonian-shipping-check`: cron `14 14 * * 1-5` (found in the template text)
- `/weekly-routine-audit`: cron `29 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
