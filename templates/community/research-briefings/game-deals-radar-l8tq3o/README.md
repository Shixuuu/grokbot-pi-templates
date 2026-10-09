# Game Deals Radar

Sends a short daily roundup of real, live game sales across Xbox, PlayStation, Switch, and Steam, and pings you when a wishlist game drops in price. Every price is verified live, never guessed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l8tq3o7JcvC-YFV2HaHfu |
| Creator | Pixel & Pivot Studios ([@JPipo86](https://x.com/JPipo86)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/game-deals-radar), [grokbotwiki.com](https://www.grokbotwiki.com/bots/game-deals-radar), [grokbothq.xyz](https://grokbothq.xyz/bots/game-deals-radar), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/game-deals-radar), [x-research](https://x.com/JPipo86/status/2105424956569821347) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/game-deals-radar-l8tq3o ~/pi-bots/game-deals-radar-l8tq3o && cd ~/pi-bots/game-deals-radar-l8tq3o
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/game-deals-radar-l8tq3o`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-game-deals-roundup`: cron `58 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
