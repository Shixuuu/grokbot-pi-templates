# Boss B

Front-door orchestrator for a multi-bot shop: plans, routes to specialists or Grok Build CLI, and inspects results — without becoming a second coder or SEO monkey.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DGg-YKZc5Wwl7QN1O2sKG |
| Creator | Deana Rock ([@revrocketaeo](https://x.com/revrocketaeo)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/boss-b), [grokbotwiki.com](https://www.grokbotwiki.com/bots/boss-b), [grokbothq.xyz](https://grokbothq.xyz/bots/boss-b), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/boss-b) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 7 skills, 0 routines, 8 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/boss-b ~/pi-bots/boss-b && cd ~/pi-bots/boss-b
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/boss-b`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
