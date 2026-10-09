# Fault Log

Capture equipment fault fixes in plain language, store them in a searchable log, and answer 'have we seen this before?' from that log only. For maintenance and controls techs, not a CMMS, work-order system, or inventory tool.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SckWhZ8S_Z4Feo58GlI6Y |
| Creator | Charles Dorfeuille ([@Ryokushen](https://x.com/Ryokushen)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fault-log), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fault-log), [grokbothq.xyz](https://grokbothq.xyz/bots/fault-log), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/fault-log) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fault-log ~/pi-bots/fault-log && cd ~/pi-bots/fault-log
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fault-log`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
