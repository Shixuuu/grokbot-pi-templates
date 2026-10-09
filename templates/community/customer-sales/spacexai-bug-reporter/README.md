# spacexai-bug-reporter

Prepares paste-ready SpaceXAI / xAI / Grok bug reports for official Report an issue, billing, API, and X Help Center paths. Does not file tickets.

| | |
| --- | --- |
| Original template | https://x.ai/bot/g_xmlbEvupO0b1Emk9ohZ |
| Creator | Fine_Computer_4451 ([@Fine_4451](https://x.com/Fine_4451)) |
| Category | community / customer-sales |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/spacexai-bug-reporter), [botsdots.site](https://botsdots.site/templates/spacexai-bug-reporter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/spacexai-bug-reporter), [grokbothq.xyz](https://grokbothq.xyz/bots/spacexai-bug-reporter), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/g_xmlbEvupO0b1Emk9ohZ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/spacexai-bug-reporter), [x-research](https://x.com/Fine_4451/status/2096010664636506121) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/spacexai-bug-reporter ~/pi-bots/spacexai-bug-reporter && cd ~/pi-bots/spacexai-bug-reporter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/spacexai-bug-reporter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
