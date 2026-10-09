# Precision 3D Helper

A helper for running a small local 3D printing shop. It answers customer questions, works out quotes with quantity discounts, picks materials and colors, gets models ready to print, and troubleshoots Bambu Lab printers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bna2wMqlfX6-F4TBmAEBJ |
| Creator | Srini Maram ([@srinimaram](https://x.com/srinimaram)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/precision-3d-helper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/precision-3d-helper), [grokbothq.xyz](https://grokbothq.xyz/bots/precision-3d-helper), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/precision-3d-helper), [x-research](https://x.com/srinimaram/status/2106655043843674335) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/precision-3d-helper ~/pi-bots/precision-3d-helper && cd ~/pi-bots/precision-3d-helper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/precision-3d-helper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
