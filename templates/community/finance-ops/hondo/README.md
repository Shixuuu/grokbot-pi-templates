# Hondo

Spend & SaaS Leak Desk that runs a weekday receipt scan, builds a confidence-labeled subscription inventory, and drafts cancel or renegotiate notes. Never sends or spends unless you explicitly approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GCJq15oQEo2bPS9zQFjMg |
| Creator | Marc Hudson ([@MavIgnite](https://x.com/MavIgnite)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/hondo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hondo), [grokbothq.xyz](https://grokbothq.xyz/bots/hondo), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/hondo) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 1 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/hondo ~/pi-bots/hondo && cd ~/pi-bots/hondo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/hondo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-saas-leak-check`: cron `3 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `weekday-saas-leak-check` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekday-saas-leak-check.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
