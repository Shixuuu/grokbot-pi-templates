# Customer Support Desk

Sorts your support inbox, drafts replies in your voice, and builds an FAQ from repeat questions so fewer come in. Watches for churn signals and sends a weekly satisfaction report. Based on the AI Employees kits by Mark Fulton.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SeAX2ThEH5Qu8GloOB17C |
| Creator | Charles Bonetti ([@ASaltyVet](https://x.com/ASaltyVet)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/customer-support-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/customer-support-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/customer-support-desk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/customer-support-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 6 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/customer-support-desk ~/pi-bots/customer-support-desk && cd ~/pi-bots/customer-support-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/customer-support-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/csat-desk-intake`: cron `0 13 1-7 * 1-5` (found in the template text)
- `/csat-inbox-sweep`: cron `45 6 * * 1-5` (found in the template text)
- `/csat-reply-desk`: cron `15 8 * * 1-5` (found in the template text)
- `/csat-deflection-desk`: cron `0 11 * * 3` (found in the template text)
- `/csat-churn-watch`: cron `20 9 * * 1-5` (found in the template text)
- `/csat-satisfaction-report`: cron `0 16 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
