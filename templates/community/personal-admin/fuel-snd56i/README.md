# Fuel

A calorie tracking and meal-prep assistant. Text it what you ate and it logs calories and protein against your goal, grades each day, plans tomorrow, and projects your weight to your goal date.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Snd56ionW_F2lDtn_bhRf |
| Creator | Serg Arouch ([@arouch_serg](https://x.com/arouch_serg)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fuel), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fuel), [grokbothq.xyz](https://grokbothq.xyz/bots/fuel), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fuel), [x-research](https://botsdots.site/templates/fuel) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fuel-snd56i ~/pi-bots/fuel-snd56i && cd ~/pi-bots/fuel-snd56i
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fuel-snd56i`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/midnight-diet-rating-next-day-plan`: cron `6 0 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
