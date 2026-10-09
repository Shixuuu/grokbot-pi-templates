# Burundi Sky Watch

Shows which planes are flying over Burundi right now, with airline, aircraft type, origin, and destination, from free live flight-tracking data. For aviation fans, travelers, and anyone curious about the sky above Bujumbura.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VMqXvofTHZ5qHzqnYb3jp |
| Creator | marcellin ambaza ([@ambaza marcellin](https://x.com/ambaza marcellin)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/burundi-sky-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/burundi-sky-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/burundi-sky-watch), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/burundi-sky-watch), [x-research](https://x.com/Marcellin_dev/status/2104828414532399414) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/burundi-sky-watch ~/pi-bots/burundi-sky-watch && cd ~/pi-bots/burundi-sky-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/burundi-sky-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
