# Grocery · Clip & Cart

Clips your grocery coupons, builds the weekly list, and stages pickup. You approve before anything gets ordered. Works with any grocery chain you set up.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0JEs5P-XFbJw6fSsticl8 |
| Creator | BC ([@crofty_x](https://x.com/crofty_x)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/grocery-clip-cart), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grocery-clip-cart), [grokbothq.xyz](https://grokbothq.xyz/bots/grocery-clip-and-cart), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/crofty_x/status/2104715734664569199) |
| Fidelity | **full** (full recipe, template version 15) |
| Contents | 3 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/grocery-clip-cart ~/pi-bots/grocery-clip-cart && cd ~/pi-bots/grocery-clip-cart
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/grocery-clip-cart`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
