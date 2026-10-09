# Quotewise Daily

Quote desk for Quotewise.io — day-stable daily pick, semantic find, attribution checks, and collection feeds with deep-linked citations.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kmmBn74qwBr9lgedW4naf |
| Creator | Quotewise .io ([@quotewiser](https://x.com/quotewiser)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/quotewise-daily), [grokbotwiki.com](https://www.grokbotwiki.com/bots/quotewise-daily), [grokbothq.xyz](https://grokbothq.xyz/bots/quotewise-daily), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/quotewise-daily), [x-research](https://x.com/quotewiser/status/2097819326506008642) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 4 skills, 2 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/quotewise-daily ~/pi-bots/quotewise-daily && cd ~/pi-bots/quotewise-daily
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/quotewise-daily`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-quotewise-daily`: cron `0 8 * * 1-5` (found in the template text)
- `/evening-quotewise-journal`: cron `0 20 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
