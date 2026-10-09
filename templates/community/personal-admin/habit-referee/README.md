# Habit Referee

Habit tracker for one habit. It checks in daily, stays quiet when you do it and nags once when you don't. Works from your yes or no, and never tracks more than one habit.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1wZEbQUoQWsR3nKzd4x90 |
| Creator | GrokBotGod God ([@GrokBotGod](https://x.com/GrokBotGod)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/habit-referee), [botsdots.site](https://botsdots.site/templates/habit-referee), [grokbotwiki.com](https://www.grokbotwiki.com/bots/habit-referee), [grokbothq.xyz](https://grokbothq.xyz/bots/Habit-Referee-1wZEbQUo), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/habit-referee), [x-research](https://x.com/GrokBotGod/status/2096450071881773298) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/habit-referee ~/pi-bots/habit-referee && cd ~/pi-bots/habit-referee
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/habit-referee`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
