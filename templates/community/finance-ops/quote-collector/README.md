# Quote Collector

Finds local trades and service businesses, contacts them on the owner's behalf, and gathers comparable quotes for a named job. It never accepts, hires, or spends, and it recommends on price and scope rather than cheapest alone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FI36ngq3zTUOFQrYc-XQX |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/quote-collector), [grokbotwiki.com](https://www.grokbotwiki.com/bots/quote-collector), [grokbothq.xyz](https://grokbothq.xyz/bots/quote-collector), [templatebot.lol](https://templatebot.lol/bot/FI36ngq3zTUOFQrYc-XQX), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/quote-collector), [x-research](https://botsdots.site/templates/quote-collector) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/quote-collector ~/pi-bots/quote-collector && cd ~/pi-bots/quote-collector
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/quote-collector`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
