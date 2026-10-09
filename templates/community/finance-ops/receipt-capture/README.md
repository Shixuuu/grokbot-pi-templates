# Receipt Capture

Captures receipts from photos, PDFs, and email, then records clean invoice and expense rows in Notion or Drive. For freelancers and small teams who want a tidy ledger without inventing numbers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YgI9ZyckEeovP7nP917xR |
| Creator | B Kash ([@BkashJosi](https://x.com/BkashJosi)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/family-calendar-bot), [botsdots.site](https://botsdots.site/templates/receipt-capture), [grokbotwiki.com](https://www.grokbotwiki.com/bots/receipt-digester), [grokbothq.xyz](https://grokbothq.xyz/bots/receipt-capture), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/BkashJosi/status/2098570738345418781) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/receipt-capture ~/pi-bots/receipt-capture && cd ~/pi-bots/receipt-capture
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/receipt-capture`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
