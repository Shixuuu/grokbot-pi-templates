# Meal Planning & Grocery Buying Bot

Plans weekly dinners around your store’s sales, keeps a running grocery list, loads the cart after you sign in, clips digital coupons, and only orders after you confirm.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lj8-Co5IA-wbN4T84zK8L |
| Creator | Scott Bonge ([@ScottBuildsBots](https://x.com/ScottBuildsBots)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/meal-planning-grocery-buying-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/meal-planning-grocery-buying-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/meal-planning-grocery-buying-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/meal-planning-grocery-buying-bot) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 1 skills, 0 routines, 18 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/meal-planning-grocery-buying-bot ~/pi-bots/meal-planning-grocery-buying-bot && cd ~/pi-bots/meal-planning-grocery-buying-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/meal-planning-grocery-buying-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (18) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
