# Starship Tracker

Tracks the current or next SpaceX Starship launch from primary public sources, with a Simple mode board plus Mission Control, calendar, visuals, intel, and Where’s Elon — Manual Update only, no invented dates or results.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LH13m3OO5TPi1w8E65sYB |
| Creator | Chad S ([@chad7757](https://x.com/chad7757)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/starship-tracker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/starship-tracker), [grokbothq.xyz](https://grokbothq.xyz/bots/starship-tracker), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/starship-tracker), [x-research](https://botsdots.site/templates/starship-tracker) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 3 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/starship-tracker ~/pi-bots/starship-tracker && cd ~/pi-bots/starship-tracker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/starship-tracker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/flight-14-standing-watch`: cron `18 8,12,16,20 * * 5,6` (found in the template text)
- `/flight-14-launch-window-watch`: cron `1,31 6-23 * * 0,1` (found in the template text)
- `/coast-jet-watch-bro-hrl`: cron `51 8,12,16,20 * * 0,1,5,6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
