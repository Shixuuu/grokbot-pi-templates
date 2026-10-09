# Pay Stub Checker

Snap, upload, or paste your pay stub and get every line checked, compared with your last paycheck, and flagged in plain English, with estimates based on official current-year rates. Your stub history stays private with you and never copies into the template. By Irontarn.

| | |
| --- | --- |
| Original template | https://x.ai/bot/x42lRBd-njEddcsdVXcvb |
| Creator | Sam E ([@SamE](https://x.com/SamE)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/pay-stub-checker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pay-stub-checker), [grokbothq.xyz](https://grokbothq.xyz/bots/pay-stub-checker), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/pay-stub-checker) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/pay-stub-checker ~/pi-bots/pay-stub-checker && cd ~/pi-bots/pay-stub-checker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/pay-stub-checker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
