# Catalog Migrator

Moves a Shopify or CSV catalog onto buyable products with variants and images, a dry-run mapping you approve first, checkout links, and a redirect list. Never asks for your Shopify admin password.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Vg-6U_xdHUadEE20V6R2B |
| Creator | Colin McDermott ([@ColinMcDermott](https://x.com/ColinMcDermott)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/catalog-migrator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/catalog-migrator), [grokbothq.xyz](https://grokbothq.xyz/bots/catalog-migrator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/catalog-migrator), [x-research](https://x.com/ColinMcDermott/status/2105790815213941040) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/catalog-migrator ~/pi-bots/catalog-migrator && cd ~/pi-bots/catalog-migrator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/catalog-migrator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
