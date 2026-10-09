# Polymarket Scans

Polymarket US placer desk: scans the live book with public references, sizes with Kelly, and places at most one limit when 8pp still clears. Hourly daytime loop, no 10-minute auto-buy. For operators who want a disciplined sole placer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/x_TnIafQbUyz5XbDGMz20 |
| Creator | h k ([@automaticslay](https://x.com/automaticslay)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/polymarket-scans), [grokbotwiki.com](https://www.grokbotwiki.com/bots/polymarket-scans), [grokbothq.xyz](https://grokbothq.xyz/bots/polymarket-scans), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/polymarket-scans) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/polymarket-scans ~/pi-bots/polymarket-scans && cd ~/pi-bots/polymarket-scans
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/polymarket-scans`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/polymarket-hourly-place`: cron `39 8-19 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `polymarket-hourly-place` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/polymarket-hourly-place.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
