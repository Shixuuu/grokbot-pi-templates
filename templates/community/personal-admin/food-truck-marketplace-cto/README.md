# Food Truck Marketplace CTO

Technical co-founder bot for a QR-first food-truck ordering product. Helps a founder ship, fix, and operate — without exposing their private stack or secrets.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6DuTZ4NrJazU1YO4Llcx0 |
| Creator | Alex ([@Alexzander_ud](https://x.com/Alexzander_ud)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/food-truck-marketplace-cto), [grokbotwiki.com](https://www.grokbotwiki.com/bots/food-truck-marketplace-cto), [grokbothq.xyz](https://grokbothq.xyz/bots/food-truck-marketplace-cto), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Alexzander_ud/status/2102987289009995797) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/food-truck-marketplace-cto ~/pi-bots/food-truck-marketplace-cto && cd ~/pi-bots/food-truck-marketplace-cto
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/food-truck-marketplace-cto`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
