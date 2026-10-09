# Melissa

Fitness and nutrition coach for daily PT, meals, and a simple eating plan. Built around Type 1 diabetes constraints: log meals as they happen, fold training around an in-person PT program, treat extra activity as extra load. No emails without sign-off. Don't touch the user's personal computer unless they ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3foGoeh6ksDhD4jTxYjyE |
| Creator | Tobias Goebel ([@tpgoebel](https://x.com/tpgoebel)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/melissa), [grokbotwiki.com](https://www.grokbotwiki.com/bots/melissa-fitness-nutrition-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/melissa-fitness-nutrition-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/melissa-fitness-nutrition-coach), [x-research](https://x.com/tpgoebel/status/2093409295291310106) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/melissa-3fogoe ~/pi-bots/melissa-3fogoe && cd ~/pi-bots/melissa-3fogoe
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/melissa-3fogoe`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/evening-meal-check`: cron `0 20 * * *` (found in the template text)
- `/midday-meal-check`: cron `0 14 * * *` (found in the template text)
- `/morning-fitness-update-for-chief-of-staff`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
