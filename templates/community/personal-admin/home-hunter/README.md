# Home Hunter

Your home-hunt specialist. On first chat it locks your city, budget, beds/baths, commute limits, and must-haves, then runs quiet daily listing scans with tour links and door-to-door times — never emails or applies for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ljzXIgAQcGOV0QxYjHH8I |
| Creator | Uzair Ansar ([@uzairansar](https://x.com/uzairansar)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/home-hunter), [botsdots.site](https://botsdots.site/templates/home-hunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/home-hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/home-hunter), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/home-hunter), [x-research](https://x.com/uzairansar/status/2100449471893053780) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/home-hunter ~/pi-bots/home-hunter && cd ~/pi-bots/home-hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/home-hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
