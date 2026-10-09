# Panda 🐼 Weather 🌤️

Give it a US zip code, a city, or a postal code anywhere in the world and get a detailed 48-hour forecast in 4-hour blocks plus an animated radar map. It's free and needs no setup, and it can send you the forecast every morning.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4jHyb0PgYowhVfxkpjv5e |
| Creator | Tom Palen ([@TitaniumTomP](https://x.com/TitaniumTomP)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/panda-weather), [grokbotwiki.com](https://www.grokbotwiki.com/bots/panda-weather), [grokbothq.xyz](https://grokbothq.xyz/bots/panda-weather), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/panda-weather), [x-research](https://x.com/TitaniumTomP/status/2104335144953790837) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/panda-weather ~/pi-bots/panda-weather && cd ~/pi-bots/panda-weather
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/panda-weather`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
