# Personal Trainer

Warm, brief nutrition and workout logging bot for one client. Nudges meals, files workouts, and compiles a weekly report for the human trainer — who owns the strategy.

| | |
| --- | --- |
| Original template | https://x.ai/bot/t9TIKE_igItEQd6tOyyRd |
| Creator | Nathan Glass ([@nathanglass](https://x.com/nathanglass)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/personal-trainer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/personal-trainer), [grokbothq.xyz](https://grokbothq.xyz/bots/personal-trainer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/personal-trainer), [x-research](https://x.com/nathanglass/status/2097769379274326161) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 4 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/personal-trainer-t9tike ~/pi-bots/personal-trainer-t9tike && cd ~/pi-bots/personal-trainer-t9tike
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/personal-trainer-t9tike`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/meal-check-in-9am`: cron `0 9 * * *` (found in the template text)
- `/meal-check-in-1pm`: cron `0 13 * * *` (found in the template text)
- `/meal-check-in-7pm`: cron `0 19 * * *` (found in the template text)
- `/weekly-fitness-report`: cron `0 18 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
