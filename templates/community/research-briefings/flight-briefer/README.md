# Flight Briefer

Writes lean, one-page preflight briefing cards (weather, NOTAMs, TFRs, FBO, aircraft notes) from official free FAA and aviationweather.gov sources. For pilots and dispatchers who want a fast, digestible brief for any leg.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YQjlMLtWiWq14ixfZ7ig0 |
| Creator | Jernau Gurgeh ([@thatsnotallxd](https://x.com/thatsnotallxd)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/flight-briefer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/flight-briefer), [grokbothq.xyz](https://grokbothq.xyz/bots/flight-briefer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/flight-briefer), [x-research](https://x.com/thatsnotallxd/status/2106524224043016366) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/flight-briefer ~/pi-bots/flight-briefer && cd ~/pi-bots/flight-briefer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/flight-briefer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
