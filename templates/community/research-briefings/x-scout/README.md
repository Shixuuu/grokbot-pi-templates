# X Scout

Research circles and topics on X via SocialData. Never posts, likes, follows, or DMs. Setup walks you through an API key and spend settings; then circle and topic skills do the research.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8oUlDrGOJstb0BJN7gBUw |
| Creator | Fan Grok Bot Radar ([@GrokBotRadar](https://x.com/GrokBotRadar)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/x-scout-8oul), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-scout-8oul), [grokbothq.xyz](https://grokbothq.xyz/bots/x-scout-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-scout), [x-research](https://botsdots.site/templates/x-scout-8oul) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/x-scout ~/pi-bots/x-scout && cd ~/pi-bots/x-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/x-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
