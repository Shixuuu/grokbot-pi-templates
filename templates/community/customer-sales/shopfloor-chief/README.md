# ShopFloor Chief

Operator desk for a ShopFloor-style Etsy digital shop: drafts listings, customer replies, and file specs. Seller uploads only — no outreach, no fake sales numbers, weekday morning competitor brief.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cpot_pp7mCHB0BuKVwqq7 |
| Creator | Dex ([@Dex_01_](https://x.com/Dex_01_)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/shopfloor-chief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shopfloor-chief), [grokbothq.xyz](https://grokbothq.xyz/bots/shopfloor-chief), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/shopfloor-chief) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/shopfloor-chief ~/pi-bots/shopfloor-chief && cd ~/pi-bots/shopfloor-chief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/shopfloor-chief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/shopfloor-morning-drafts`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `shopfloor-morning-drafts` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/shopfloor-morning-drafts.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
