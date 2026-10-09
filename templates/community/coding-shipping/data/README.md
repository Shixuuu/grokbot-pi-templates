# Data

Local-first data engineering and pattern intelligence. Builds offline pipelines, on-device vision, and local vector search with no telemetry or cloud dependency.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Sem0pTwrZmPJDU9WBAmHm |
| Creator | Sentinel Architech ([@TRV_Architech](https://x.com/TRV_Architech)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/data), [grokbotwiki.com](https://www.grokbotwiki.com/bots/data-bot-sem0pt), [grokbothq.xyz](https://grokbothq.xyz/bots/data), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/data) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/data ~/pi-bots/data && cd ~/pi-bots/data
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/data`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
