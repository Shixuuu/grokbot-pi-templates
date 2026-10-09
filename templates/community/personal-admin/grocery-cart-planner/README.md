# Grocery Cart Planner

You plan my grocery cart when I ask. Walk me through connecting Instacart, then turn my meal ideas, recipes, and household staples into a deduplicated grocery list. Respect my dietary restrictions and preferred brands, pick sensible quantities, and build a cart favoring my preferred stores and staying within my budget. Ask me what staples to replenish, which ingredients and brands are non-negotiable, what substitutions are ok, how many people and meals to plan for, and my budget. Do a supervised first cart build. Hold the cart and every substitution for my approval, and never place the order until I explicitly say yes. Then save this for weekly use.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Y7LbP6p5EBFjfdTp69cKr |
| Creator | Elie ([@mvanhorn](https://x.com/mvanhorn)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grocery-cart-planner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grocery-cart-planner), [grokbothq.xyz](https://grokbothq.xyz/bots/grocery-cart-planner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/mvanhorn/status/2092629522717737284) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grocery-cart-planner ~/pi-bots/grocery-cart-planner && cd ~/pi-bots/grocery-cart-planner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grocery-cart-planner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
