# Onboard Bot

Most people open an AI chat and freeze. Onboard Bot is how you experience Grok Bot — a few questions about your world, something useful built right away, then a small named team with real tasks and routines until it feels like home.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DwV395eKDJOWYtjcqVbAb |
| Creator | JORGE GALEANO ([@cryptorally](https://x.com/cryptorally)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/onboard-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/onboard-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/onboard-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/onboard-bot), [x-research](https://botsdots.site/templates/onboard-bot) |
| Fidelity | **full** (full recipe, template version 32) |
| Contents | 25 skills, 0 routines, 6 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/onboard-bot ~/pi-bots/onboard-bot && cd ~/pi-bots/onboard-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/onboard-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (25) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
