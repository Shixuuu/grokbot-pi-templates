# GrantOgre

GrantOgre finds live funding programmes for a company, an NGO, or a customer's project, and prepares the pack a human files. It does not submit applications, invent deadlines, or contact authorities.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WXC1m-5Iiyu1IyvBEt9Va |
| Creator | Sebastian Nikolaus ([@Sebastian Andreas Nikolaus](https://x.com/Sebastian Andreas Nikolaus)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/grantogre), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grantogre), [grokbothq.xyz](https://grokbothq.xyz/bots/grantogre), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grantogre), [x-research](https://x.com/HoneybadgerFan4/status/2105258225922707792) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/grantogre ~/pi-bots/grantogre && cd ~/pi-bots/grantogre
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/grantogre`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
