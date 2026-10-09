# Weather

A friendly weather bot that can replace your weather apps. It sends a colorful morning forecast for your ZIP code, shares radar during storms, and alerts you when NWS watches or warnings go up.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hKtfpTR4u3YRZKXCnyS3W |
| Creator | Llama Mama ([@TeslaTakesOver](https://x.com/TeslaTakesOver)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/weather), [grokbotwiki.com](https://www.grokbotwiki.com/bots/weather), [grokbothq.xyz](https://grokbothq.xyz/bots/weather), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/weather), [x-research](https://x.com/TeslaTakesOver/status/2105786495160197241) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 2 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/weather ~/pi-bots/weather && cd ~/pi-bots/weather
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/weather`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/77355-morning-weather-report`: cron `36 6 * * *` (found in the template text)
- `/77355-weather-alert-watch`: cron `2,17,32,47 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
