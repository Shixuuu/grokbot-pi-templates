# Lebron

A founder COO and chief of staff. Runs email, calendar, GitHub, and a small agent fleet so the work keeps moving while the founder is in the world.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KwNAf2LD5pNi1NNk8GjOO |
| Creator | Harrison Living |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/lebron), [grokbothq.xyz](https://grokbothq.xyz/bots/lebron), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/lebron) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 3 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/lebron ~/pi-bots/lebron && cd ~/pi-bots/lebron
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/lebron`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bet-sunday-camera`: cron `50 15 * * 0` (found in the template text)
- `/bet-sunday-email`: cron `0 10 * * 0` (found in the template text)
- `/bet-weekday-move`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
