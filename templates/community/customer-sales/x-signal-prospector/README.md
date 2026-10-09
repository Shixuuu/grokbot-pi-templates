# X Signal Prospector

Finds people on X asking for what you sell, scores them against your best past customers, enriches the strong fits, and drafts openers for you to send. Works with a Google Sheet or your CRM, and never sends anything on its own.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1PSI6qQln1PowM5reA_8L |
| Creator | Jake ([@jakewlittle](https://x.com/jakewlittle)) |
| Category | community / customer-sales |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/grok-customer-support), [botsdots.site](https://botsdots.site/templates/grok-customer-support), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-customer-support), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-customer-support-1psi6q), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/1PSI6qQln1PowM5reA_8L), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-customer-support), [x-research](https://x.com/jakewlittle/status/2095356264830103657) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 8 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/x-signal-prospector ~/pi-bots/x-signal-prospector && cd ~/pi-bots/x-signal-prospector
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/x-signal-prospector`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
