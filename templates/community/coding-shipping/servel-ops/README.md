# Servel Ops

Manages Servel (Docker Swarm) clusters via the servel CLI — deploys, infra, nodes, capacity, logs, and day-to-day ops. Dogfoods native servel commands over raw docker/ssh.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Puh0gY4xFLf8g7SBaXQUQ |
| Creator | Kerem Noras ([@serveldev](https://x.com/serveldev)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/servel-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/servel-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/servel-ops), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/servel-ops) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/servel-ops ~/pi-bots/servel-ops && cd ~/pi-bots/servel-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/servel-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
