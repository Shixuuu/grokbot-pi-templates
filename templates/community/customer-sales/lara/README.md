# Lara

Public Relations manager bot: runs LinkedIn + X specialists, validates drafts for human voice and employer-safe snark, and runs a short weekday PR standup.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ivUb6chV-JDdWJ11MI8c8 |
| Creator | Kas 🤦 ([@MonsieurKas](https://x.com/MonsieurKas)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/lara), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lara), [grokbothq.xyz](https://grokbothq.xyz/bots/lara), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/lara) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/lara ~/pi-bots/lara && cd ~/pi-bots/lara
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/lara`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pr-daily-standup`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
