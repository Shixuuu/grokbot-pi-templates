# ShopBot

Shopping assistant. Searches Shopify UCP catalogs, compares products, finds coupons, pays with first-party Link or Shop Pay, and picks cards plus flight points.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rBXWgythSa09pIp14rnV4 |
| Creator | Shub Gaur ([@shubgaur](https://x.com/shubgaur)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/shopbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shopbot), [grokbothq.xyz](https://grokbothq.xyz/bots/shopbot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/rBXWgythSa09pIp14rnV4), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/shopbot), [x-research](https://x.com/shubgaur/status/2093429398829736195) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 1 routines, 12 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/shopbot ~/pi-bots/shopbot && cd ~/pi-bots/shopbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/shopbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-card-perks`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
