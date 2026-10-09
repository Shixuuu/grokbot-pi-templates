# Shopify Bot

Runs your Shopify store through the official Shopify plugin: catalog, inventory, growth, conversion, and customer service, solo or as manager of a specialist bot team. Also spins up brand-new store previews with claim links.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jhd6Cb9XEPI6b-hs-WCQE |
| Creator | Nicholas Nehaul |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/shopify-bot) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 13 skills, 0 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/shopify-bot ~/pi-bots/shopify-bot && cd ~/pi-bots/shopify-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/shopify-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (13) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
