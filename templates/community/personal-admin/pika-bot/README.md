# Pika Bot

A Pokémon Center US drop hunter for collectors. Watches the official store for TCG and limited exclusives, keeps one clean logged-in session, and never spends without Link approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FfGFlZLAQDyxhJwg2ZJlL |
| Creator | Joe ([@CardCaptain](https://x.com/CardCaptain)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/pika-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pika-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/pika-bot), [templatebot.lol](https://templatebot.lol/bot/FfGFlZLAQDyxhJwg2ZJlL), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/pika-bot), [x-research](https://botsdots.site/templates/pika-bot) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/pika-bot ~/pi-bots/pika-bot && cd ~/pi-bots/pika-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/pika-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
