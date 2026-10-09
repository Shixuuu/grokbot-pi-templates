# Invoice Mirror

Keeps Harvest and Balances invoices in sync: daily create/update from Harvest into Balances, then mark Harvest paid when Balances shows payment. Stages drafts and posts only with your approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HwckXN5Yd1uxRu86msyfj |
| Creator | Jerrod Tuck ([@jerrodtuck](https://x.com/jerrodtuck)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/invoice-mirror), [grokbotwiki.com](https://www.grokbotwiki.com/bots/invoice-mirror), [grokbothq.xyz](https://grokbothq.xyz/bots/invoice-mirror), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/invoice-mirror) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 2 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/invoice-mirror ~/pi-bots/invoice-mirror && cd ~/pi-bots/invoice-mirror
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/invoice-mirror`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/harvest-balances-daily-invoice-mirror`: cron `0 18 * * *` (found in the template text)
- `/balances-harvest-mark-paid`: cron `30 18 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
