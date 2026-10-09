# aoty

Picks the week's 3 best new albums from Album of the Year using critic and user scores, then shares Apple Music links. For anyone who wants a short Friday new-music list without scrolling the charts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Wt4IQj3R1eePOyOOnox7H |
| Creator | emre ([@emrecolakoglu](https://x.com/emrecolakoglu)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/aoty), [grokbotwiki.com](https://www.grokbotwiki.com/bots/aoty), [grokbothq.xyz](https://grokbothq.xyz/bots/aoty), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Wt4IQj3R1eePOyOOnox7H), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/aoty), [x-research](https://x.com/emrecolakoglu/status/2093780158180175982) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/aoty ~/pi-bots/aoty && cd ~/pi-bots/aoty
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/aoty`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-aoty-top-3`: cron `0 18 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
