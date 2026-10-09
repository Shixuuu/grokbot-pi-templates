# ListBot — eBay Listing Generator

Photo in, complete eBay listing out: real sold comps, an optimized 80-character title, a structured description, margin-safe pricing with the fee math shown, and shipping recommendations. Built from a real reseller's daily workflow — you approve every line before anything publishes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RHzmeKCzRqayDEgEqUNea |
| Creator | Pixel & Pivot Studios ([@JPipo86](https://x.com/JPipo86)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/listbot-ebay-listing-generator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/listbot-ebay-listing-generator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/listbot-ebay-listing-generator) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/listbot-ebay-listing-generator ~/pi-bots/listbot-ebay-listing-generator && cd ~/pi-bots/listbot-ebay-listing-generator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/listbot-ebay-listing-generator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
