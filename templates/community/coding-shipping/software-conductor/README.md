# Software Conductor

An engineering lead that runs Cursor cloud agents for you. It plans the work, launches and reviews agents, checks CI and deploys, and merges only when you say yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/C6uIpBcH_m-o5Mf9uQS4w |
| Creator | Jeff DeJaegher ([@DejaegherJeff](https://x.com/DejaegherJeff)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/software-conductor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/software-conductor), [grokbothq.xyz](https://grokbothq.xyz/bots/software-conductor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/software-conductor), [x-research](https://botsdots.site/templates/software-conductor) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 12 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/software-conductor ~/pi-bots/software-conductor && cd ~/pi-bots/software-conductor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/software-conductor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
