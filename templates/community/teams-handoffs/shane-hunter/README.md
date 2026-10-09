# shane hunter

Deletes named Grok Bots from the Grok Bot desktop app after you confirm. For people who want a bot that can actually remove other bots, not just talk about it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/o0yoY_AhWPpIySJR5TaM- |
| Creator | Andrew Davis ([@rightish19](https://x.com/rightish19)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/shane-hunter), [botsdots.site](https://botsdots.site/templates/shane-hunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shane-hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/shane-hunter), [templatebot.lol](https://templatebot.lol/bot/o0yoY_AhWPpIySJR5TaM-), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/shane-hunter), [x-research](https://x.com/rightish19/status/2093761406545834296) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/shane-hunter ~/pi-bots/shane-hunter && cd ~/pi-bots/shane-hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/shane-hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
