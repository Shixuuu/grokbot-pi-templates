# Hook (Abandoned cart sales)

Finds unpaid orders that completed an online order form but abandoned before checkout. Hook looks up that property’s public deed (the official ownership document on file with the county), attaches a copy, explains in everyday language who it shows as the owner, and drafts a helpful email for you to approve and send. The lead sees you’re real before they pay. The bot never emails the customer itself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bcNNQsv6QDI91RpqgCWAu |
| Creator | todd haag ([@toddhaag](https://x.com/toddhaag)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/hook-abandoned-cart-sales), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hook-abandoned-cart-sales), [grokbothq.xyz](https://grokbothq.xyz/bots/hook-abandoned-cart-sales), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/hook-abandoned-cart-sales) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/hook-abandoned-cart-sales ~/pi-bots/hook-abandoned-cart-sales && cd ~/pi-bots/hook-abandoned-cart-sales
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/hook-abandoned-cart-sales`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
