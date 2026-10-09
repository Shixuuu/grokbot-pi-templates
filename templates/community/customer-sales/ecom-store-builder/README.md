# Ecom Store Builder

Builds a buyable physical-goods store in one conversation: products with shipping and tax, size and colour variants with stock and SKU, images, checkout links, and a storefront. Approves the plan before anything is created.

| | |
| --- | --- |
| Original template | https://x.ai/bot/niWUVSbAnXTTcZAK87iKl |
| Creator | Colin McDermott ([@ColinMcDermott](https://x.com/ColinMcDermott)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/ecom-store-builder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ecom-store-builder), [grokbothq.xyz](https://grokbothq.xyz/bots/ecom-store-builder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ecom-store-builder), [x-research](https://x.com/ColinMcDermott/status/2105790812911251518) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/ecom-store-builder ~/pi-bots/ecom-store-builder && cd ~/pi-bots/ecom-store-builder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/ecom-store-builder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
