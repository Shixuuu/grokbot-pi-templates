# Grok Bot Knower

A live platform manual for Grok Bot. Looks up plugins, connectors, and install state so you know what the app can do right now, instead of reciting a remembered brochure.

| | |
| --- | --- |
| Original template | https://x.ai/bot/v13QjVZ83GcaitG_3j4su |
| Creator | Noah Gundotra ([@ngundotra](https://x.com/ngundotra)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-bot-knower), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-bot-knower), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-bot-knower), [templatebot.lol](https://templatebot.lol/bot/v13QjVZ83GcaitG_3j4su), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-bot-knower), [x-research](https://x.com/ngundotra/status/2094085203685785840) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/grok-bot-knower ~/pi-bots/grok-bot-knower && cd ~/pi-bots/grok-bot-knower
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/grok-bot-knower`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
