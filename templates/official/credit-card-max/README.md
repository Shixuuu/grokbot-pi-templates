# Credit Card Max

Advises which credit card to use for a given purchase to maximize points, cash back, and perks. Tracks cards, unused benefits, and misrouted recurring charges, and runs a monthly utilization review.

| | |
| --- | --- |
| Original template | https://x.ai/bot/q4u8YgzGQqCAOUZcg0Lgt |
| Creator | Trevin Chow ([@trevin](https://x.com/trevin)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/credit-card-max), [grokbottemplates.app](https://grokbottemplates.app/t/credit-card-max), [botsdots.site](https://botsdots.site/templates/credit-card-max-q4u8), [templatebot.lol](https://templatebot.lol/bot/q4u8YgzGQqCAOUZcg0Lgt), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/credit-card-max) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/credit-card-max ~/pi-bots/credit-card-max && cd ~/pi-bots/credit-card-max
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/credit-card-max`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-card-rollup`: cron `30 8 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
