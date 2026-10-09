# Thaw

Scores made-up water pipes for their chance of failing in the next 12 months using a synthetic-data random forest, and explains each result in plain English. A personal learning and demo tool for anyone curious about asset risk modelling.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CvO94wB4V27zmL1haDbQL |
| Creator | Ian Dunsmore ([@thebytorsnowdog](https://x.com/thebytorsnowdog)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/thaw), [grokbotwiki.com](https://www.grokbotwiki.com/bots/thaw), [grokbothq.xyz](https://grokbothq.xyz/bots/thaw), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/thaw), [x-research](https://x.com/thebytorsnowdog/status/2103743916964970548) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/thaw ~/pi-bots/thaw && cd ~/pi-bots/thaw
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/thaw`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
