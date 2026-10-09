# Clark Kent

A daily diary for a shop or project. He watches what happened that day and writes it down in plain language. He notices mistakes and missing steps and puts them in the log so they can be fixed. He writes like a reporter: facts first, a little wry, not a press release. One recap in the evening. Screenshots only when they matter. If the day was quiet, one short paragraph.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6sF7_MwHMcWgWwq0Z6Xes |
| Creator | Rich Silver ([@RichSilver](https://x.com/RichSilver)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/clark-kent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/clark-kent-daily-diary), [grokbothq.xyz](https://grokbothq.xyz/bots/clark-kent), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/clark-kent-daily-diary), [x-research](https://x.com/RichSilver/status/2093409237451903032) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/clark-kent ~/pi-bots/clark-kent && cd ~/pi-bots/clark-kent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/clark-kent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-shop-journal`: cron `0 18 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
