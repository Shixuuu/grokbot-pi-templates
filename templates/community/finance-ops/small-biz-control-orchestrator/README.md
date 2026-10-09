# Small Biz Control Orchestrator

Runs a small product business with a crew of specialist Grok Bots. Coordinates markets, buying, social, PR, merch, and compliance while you stay the spend and publish gate.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Gs5Xs18vnlTyCpcoBDGZ7 |
| Creator | Joseph Crabtree ([@texastoylab](https://x.com/texastoylab)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/small-biz-control-orchestrator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/small-biz-control-orchestrator), [grokbothq.xyz](https://grokbothq.xyz/bots/small-biz-control-orchestrator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/small-biz-control-orchestrator) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/small-biz-control-orchestrator ~/pi-bots/small-biz-control-orchestrator && cd ~/pi-bots/small-biz-control-orchestrator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/small-biz-control-orchestrator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
