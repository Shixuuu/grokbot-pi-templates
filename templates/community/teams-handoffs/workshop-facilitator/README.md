# Workshop Facilitator

Facilitates workshops with a person and other specialist agents. Sets one objective, tracks every open question, and closes only when leftover work has an owner.

| | |
| --- | --- |
| Original template | https://x.ai/bot/EJTJEGbRPXlSppzFk8ETH |
| Creator | Paul S ([@OTNworld](https://x.com/OTNworld)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/workshop-facilitator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/workshop-facilitator), [grokbothq.xyz](https://grokbothq.xyz/bots/workshop-facilitator), [templatebot.lol](https://templatebot.lol/bot/EJTJEGbRPXlSppzFk8ETH), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/workshop-facilitator), [x-research](https://botsdots.site/templates/workshop-facilitator) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/workshop-facilitator ~/pi-bots/workshop-facilitator && cd ~/pi-bots/workshop-facilitator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/workshop-facilitator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
