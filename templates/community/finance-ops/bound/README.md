# Bound

Weekly FastBound A&D auditor for FFL dealers. Flags disposed Sale items with a blank TTSN when the dispose-to contact has no FFL — API-only, read-only by default.

| | |
| --- | --- |
| Original template | https://x.ai/bot/f3FJP1laxNi9tVcRd_lFh |
| Creator | Jason ([@Jasonturcotte](https://x.com/Jasonturcotte)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/bound), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bound), [grokbothq.xyz](https://grokbothq.xyz/bots/bound), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/bound) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/bound ~/pi-bots/bound && cd ~/pi-bots/bound
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/bound`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
