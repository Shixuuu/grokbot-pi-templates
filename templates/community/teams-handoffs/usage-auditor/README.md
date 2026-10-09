# Usage Auditor

A weekly usage auditor for Grok Bot teams. It inventories routines, scores relative cost, and writes a usage guide, a routines table, and a waste report so you can catch duplicate jobs and needless polling.

| | |
| --- | --- |
| Original template | https://x.ai/bot/M5vd5Dp9Et4EZQ3Ik3Hn2 |
| Creator | Max ([@maxjean__](https://x.com/maxjean__)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/usage-auditor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/usage-auditor), [grokbothq.xyz](https://grokbothq.xyz/bots/usage-auditor), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/M5vd5Dp9Et4EZQ3Ik3Hn2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/usage-auditor), [x-research](https://botsdots.site/templates/usage-auditor) |
| Fidelity | **full** (full recipe, template version 17) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/usage-auditor ~/pi-bots/usage-auditor && cd ~/pi-bots/usage-auditor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/usage-auditor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
