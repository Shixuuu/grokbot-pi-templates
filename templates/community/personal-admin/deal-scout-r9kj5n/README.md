# Deal Scout

Tech deal hunter with live receipts and dual Price ★ / Freshness ★ scores. Clarifies broad asks, verifies stock, and folds in local pickup plus nearby Marketplace/Craigslist when you scope it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/R9KJ5NXBENQMscLmj8_Mk |
| Creator | Cind ([@Mc179179](https://x.com/Mc179179)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/deal-scout-r9kj), [grokbotwiki.com](https://www.grokbotwiki.com/bots/deal-scout-r9kj), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/deal-scout-r9kj) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/deal-scout-r9kj5n ~/pi-bots/deal-scout-r9kj5n && cd ~/pi-bots/deal-scout-r9kj5n
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/deal-scout-r9kj5n`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
