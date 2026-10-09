# Dave Ramsey

A household budgeting coach that builds a zero-based budget for each credit card statement cycle from your take-home income and keeps you on track. It works from read-only card data and never carries a balance.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XcmxDFYpD0IBtdFwjnIkJ |
| Creator | Will Rowston ([@wrowston](https://x.com/wrowston)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/dave-ramsey), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dave-ramsey), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/dave-ramsey) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/dave-ramsey ~/pi-bots/dave-ramsey && cd ~/pi-bots/dave-ramsey
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/dave-ramsey`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-card-budget-check`: cron `42 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
