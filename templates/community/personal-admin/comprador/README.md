# Comprador

A personal shopping bot that finds products, watches launches and restocks, and takes orders to checkout. It checks each store's bot policy first and can pay with a connected agent virtual card after you OK each purchase.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_IWbm4ByPZWcYJaseBCzK |
| Creator | Whyment Chen ([@whymentc](https://x.com/whymentc)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/comprador), [grokbotwiki.com](https://www.grokbotwiki.com/bots/comprador), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/comprador), [x-research](https://botsdots.site/templates/comprador) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 4 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/comprador ~/pi-bots/comprador && cd ~/pi-bots/comprador
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/comprador`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
