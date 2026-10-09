# Titan Show Research

Live-show research desk for X. Topic hunts, opens posts, locks air-ready cards in a board file. Weekly or daily — not a general news chatbot.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DyKsq0BuAq-c-N0mkqh7U |
| Creator | Hulkanator Smash ([@TitansDrop](https://x.com/TitansDrop)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/titan-show-research), [grokbotwiki.com](https://www.grokbotwiki.com/bots/titan-show-research), [grokbothq.xyz](https://grokbothq.xyz/bots/Titan-Show-Research-DyKsq0Bu), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/TitansDrop/status/2096460487768609125) |
| Fidelity | **full** (full recipe, template version 17) |
| Contents | 2 skills, 0 routines, 14 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/titan-show-research ~/pi-bots/titan-show-research && cd ~/pi-bots/titan-show-research
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/titan-show-research`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
