# Product Support Inbox Assistant

Helps you find and draft answers to product questions. Never sends emails without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Rw8d83KAzTYQWBAtAscin |
| Creator | Anoop Baliga ([@akbaliga96](https://x.com/akbaliga96)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/customer-question-drafter), [grokbottemplates.app](https://grokbottemplates.app/t/product-support-inbox-assistant), [botsdots.site](https://botsdots.site/templates/product-support-inbox-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/product-support-inbox-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/product-support-inbox-assistant), [templatebot.lol](https://templatebot.lol/bot/Rw8d83KAzTYQWBAtAscin), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/product-support-inbox-assistant) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 12 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/official/customer-question-drafter ~/pi-bots/customer-question-drafter && cd ~/pi-bots/customer-question-drafter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/customer-question-drafter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
