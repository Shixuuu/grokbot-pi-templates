# US Tech Deals & Price Checker

Is this a good price? Verified US tech deals, price history & coupons – powered by MoneyDeals.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9AsX0Exx7P4m2IwZXJ4tp |
| Creator | Marc Majewski ([@moneydeals123](https://x.com/moneydeals123)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/us-tech-deals-price-checker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/us-tech-deals-price-checker), [grokbothq.xyz](https://grokbothq.xyz/bots/us-tech-deals-price-checker), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/us-tech-deals-price-checker), [x-research](https://botsdots.site/templates/us-tech-deals-price-checker) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/us-tech-deals-price-checker ~/pi-bots/us-tech-deals-price-checker && cd ~/pi-bots/us-tech-deals-price-checker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/us-tech-deals-price-checker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
