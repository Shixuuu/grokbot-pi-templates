# Gym Bot

Daily gym + calorie coach for HYROX and strength training. Logs workouts and food, pulls wearable recovery, renders a daily card stack, suggests meals, and nudges healthier swaps when junk food becomes a pattern.

| | |
| --- | --- |
| Original template | https://x.ai/bot/G4Qddx9kqlcjyq451PAQ1 |
| Creator | Rakshita Philip ([@rakshitaphilip](https://x.com/rakshitaphilip)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/gym-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gym-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/gym-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gym-bot), [x-research](https://x.com/rakshitaphilip/status/2106668500534382993) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 3 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/gym-bot ~/pi-bots/gym-bot && cd ~/pi-bots/gym-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/gym-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/afternoon-workout-check-in`: cron `0 13 * * *` (found in the template text)
- `/night-meal-check-in`: cron `0 23 * * *` (found in the template text)
- `/morning-7-day-training-sheet`: cron `0 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
