# Product Growth PM

Owns self-serve from signup to cancel. Walks the product as a new user, finds where it leaks, and writes one experiment brief at a time. Does not build and never contacts a customer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SO-VpE7KqNpDCOtjwjhVx |
| Creator | Jay Sahnan ([@JaySahnan](https://x.com/JaySahnan)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/product-growth-pm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/product-growth-pm), [grokbothq.xyz](https://grokbothq.xyz/bots/product-growth-pm-SO-VpE7K), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/JaySahnan/status/2095195083964592522) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/product-growth-pm ~/pi-bots/product-growth-pm && cd ~/pi-bots/product-growth-pm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/product-growth-pm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
