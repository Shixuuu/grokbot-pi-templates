# Store Manager

Runs day-to-day store ops: orders, ads health, low stock, and open disputes. Digests status and routes work to Product Ads, Order Desk, Customer Care, and catalog teammates. Never spends or changes the store itself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5axq0n6JtBkqjhMaCDO6d |
| Creator | Colin McDermott ([@ColinMcDermott](https://x.com/ColinMcDermott)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/store-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/store-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/store-manager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/store-manager), [x-research](https://x.com/ColinMcDermott/status/2105790823682003017) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/store-manager ~/pi-bots/store-manager && cd ~/pi-bots/store-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/store-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
