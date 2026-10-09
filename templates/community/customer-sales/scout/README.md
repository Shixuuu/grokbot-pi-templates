# Scout

Finds accounts already using the product that are ready for more: self-serve upgrades and sales PQLs. Learns from won and lost deals, scores usage plus company plus intent, and routes through a growth lead. Never contacts a customer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Axr06_abjVj29IjBhJrQ_ |
| Creator | Jay Sahnan ([@JaySahnan](https://x.com/JaySahnan)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/scout-axr0), [grokbotwiki.com](https://www.grokbotwiki.com/bots/scout-axr0), [grokbothq.xyz](https://grokbothq.xyz/bots/scout-Axr06_ab), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/JaySahnan/status/2095195083964592522) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/scout ~/pi-bots/scout && cd ~/pi-bots/scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
