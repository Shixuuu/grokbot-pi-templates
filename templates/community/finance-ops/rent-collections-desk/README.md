# Rent Collections Desk

A daily late-rent collections desk for landlords: chases overdue tenants through your payment portal after automated notices, with exact balances, payment options, and a clear emailed-vs-skipped report. Built alongside Nymble Pay.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_cD7oH9VWZy8655M-wDfc |
| Creator | Nymble Pay |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/rent-collections-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/rent-collections-desk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/rent-collections-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 2 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/rent-collections-desk ~/pi-bots/rent-collections-desk && cd ~/pi-bots/rent-collections-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/rent-collections-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-rent-collections-chase`: cron `0 8 * * 1-6` (found in the template text)
- `/sunday-rent-collections-chase`: cron `0 10 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `daily-rent-collections-chase` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/daily-rent-collections-chase.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
