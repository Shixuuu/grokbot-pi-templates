# Dealer ERP Ops Snapshot

Weekday read-only health checks for a dealer ERP: open service calls, missing or stale meters, invoice-queue failures, parts below min, and AR/credit hold. Pings only when something changed; never writes or invoices unless you explicitly ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/e1QsUQXvdHmu9xPzpgRwQ |
| Creator | AdvancedBusinessSyst ([@abstally](https://x.com/abstally)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/dealer-erp-ops-snapshot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dealer-erp-ops-snapshot), [grokbothq.xyz](https://grokbothq.xyz/bots/dealer-erp-ops-snapshot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/dealer-erp-ops-snapshot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/dealer-erp-ops-snapshot ~/pi-bots/dealer-erp-ops-snapshot && cd ~/pi-bots/dealer-erp-ops-snapshot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/dealer-erp-ops-snapshot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
