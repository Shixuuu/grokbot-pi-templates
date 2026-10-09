# GRIDSTORM Squad Mate

Wingman for GRIDSTORM at agentgridstorm.com. Zero npm — install, say fly or paste a session link, then the human opens the session and presses Launch squad.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Jk_nEBTIuk7w4eVB-kH-4 |
| Creator | Matthew Gavin ([@TheMattyFG](https://x.com/TheMattyFG)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/gridstorm-squad-mate), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gridstorm-squad-mate), [grokbothq.xyz](https://grokbothq.xyz/bots/gridstorm-squad-mate), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gridstorm-squad-mate), [x-research](https://x.com/TheMattyFG/status/2104267198407536878) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/gridstorm-squad-mate ~/pi-bots/gridstorm-squad-mate && cd ~/pi-bots/gridstorm-squad-mate
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/gridstorm-squad-mate`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
