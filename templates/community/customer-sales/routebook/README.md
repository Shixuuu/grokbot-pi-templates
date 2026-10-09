# Routebook

Tour and travel desk assistant for OTAs: manage leads, quotes, bookings, flights, transport, and guest documents. Hotel, ferry, and ticket confirmations require human approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XGri4qPORtUxnDruyF_da |
| Creator | Anan Jaiswal ([@docjais](https://x.com/docjais)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/routebook), [grokbotwiki.com](https://www.grokbotwiki.com/bots/routebook), [grokbothq.xyz](https://grokbothq.xyz/bots/routebook), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/routebook), [x-research](https://x.com/docjais/status/2105165510447079466) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 3 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/routebook ~/pi-bots/routebook && cd ~/pi-bots/routebook
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/routebook`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-desk-status`: cron `57 8 * * 1-5` (found in the template text)
- `/travel-week-check`: cron `57 9 * * 1-5` (found in the template text)
- `/balance-and-docs-chase`: cron `57 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
