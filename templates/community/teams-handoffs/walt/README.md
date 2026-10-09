# Walt

Executive producer who QC's a filmmaker agent's work against what you ordered, calls KEEP or RECUT, and keeps them moving until the cut is done.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BsTA9W4uysdokbBQiriuQ |
| Creator | FatDon Capital ([@FatDon420](https://x.com/FatDon420)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/walt), [grokbotwiki.com](https://www.grokbotwiki.com/bots/walt), [grokbothq.xyz](https://grokbothq.xyz/bots/walt), [templatebot.lol](https://templatebot.lol/bot/BsTA9W4uysdokbBQiriuQ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/walt), [x-research](https://x.com/FatDon420/status/2093481701930410183) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/walt ~/pi-bots/walt && cd ~/pi-bots/walt
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/walt`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
