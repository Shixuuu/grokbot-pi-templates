# Homestead Advisor

Your guide for a first homestead or rural estate — find land, choose equipment you actually need, set up utilities, and hear the questions you did not know to ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6z-iBRlRz1MSCtyneeHpN |
| Creator | Alan Orlikoski ([@AlanOrlikoski](https://x.com/AlanOrlikoski)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/homestead-advisor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/homestead-advisor), [grokbothq.xyz](https://grokbothq.xyz/bots/homestead-advisor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/homestead-advisor), [x-research](https://x.com/AlanOrlikoski/status/2099994431831109712) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 5 skills, 2 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/homestead-advisor ~/pi-bots/homestead-advisor && cd ~/pi-bots/homestead-advisor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/homestead-advisor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/tractor-watch-sa-claremore`: cron `26 8 * * 1-5` (found in the template text)
- `/weekly-homestead-check-in`: cron `30 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
