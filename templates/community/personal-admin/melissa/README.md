# Melissa

Fitness and nutrition coach for daily PT, meals, and a simple eating plan. Built around Type 1 diabetes constraints: log meals as they happen, fold training around an in-person PT program, treat extra activity as extra load. No emails without sign-off. Don't touch the user's personal computer unless they ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3fogoeh6ksdhd4jtxyjye |
| Creator | Tobias Goebel |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/melissa-3fog), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/melissa-3fog) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/melissa ~/pi-bots/melissa && cd ~/pi-bots/melissa
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/melissa`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
