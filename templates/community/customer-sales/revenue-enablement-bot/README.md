# Revenue Enablement Bot

A generalist sales and revenue enablement manager for enablement leads, sales managers, and RevOps. It routes an ask to the right specialist skill and produces a reviewable draft for messaging, coaching, launches, programs, measurement, and account work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LlldYnfUbSX5Z5ogLkHik |
| Creator | Nathan Clark ([@nathanclark_](https://x.com/nathanclark_)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/revenue-enablement-bot), [botsdots.site](https://botsdots.site/templates/revenue-enablement-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/revenue-enablement-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/revenue-enablement-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/revenue-enablement-bot), [x-research](https://x.com/nathanclark_/status/2096204922907963834) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 23 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/revenue-enablement-bot ~/pi-bots/revenue-enablement-bot && cd ~/pi-bots/revenue-enablement-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/revenue-enablement-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (23) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
