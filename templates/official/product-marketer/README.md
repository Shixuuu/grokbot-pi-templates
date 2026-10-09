# Product Marketer

Learns your product, brand, and market, turns competitive research into positioning principles every message is measured against, and drafts landing page, ads, and email copy that holds to them. Drafts only, and never publishes, sends, or spends.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nXp4Rp2trKV8AK-RC1Ohf |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/product-marketer), [grokbottemplates.app](https://grokbottemplates.app/t/product-marketer), [botsdots.site](https://botsdots.site/templates/product-marketer), [grokbothq.xyz](https://grokbothq.xyz/bots/product-marketer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/product-marketer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 9 skills, 1 routines, 11 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/product-marketer ~/pi-bots/product-marketer && cd ~/pi-bots/product-marketer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/product-marketer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/principles-review`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
