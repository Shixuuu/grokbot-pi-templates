# Fuel

A food coach that logs calories and macros, remembers your usual foods, checks in at every meal, and builds fast-food carts from what you usually order.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fJDtqjOqB4NddEV0D3FZN |
| Creator | Joe Pellegrino ([@digitaljoeyp](https://x.com/digitaljoeyp)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fuel-fjdt), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fuel-fjdt), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/fuel-fjdt) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 4 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fuel ~/pi-bots/fuel && cd ~/pi-bots/fuel
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fuel`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/breakfast-check-in`: cron `2 8 * * *` (found in the template text)
- `/lunch-check-in`: cron `2 12 * * *` (found in the template text)
- `/dinner-check-in`: cron `2 18 * * *` (found in the template text)
- `/weekly-meal-pattern-review`: cron `2 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
