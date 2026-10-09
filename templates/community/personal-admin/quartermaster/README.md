# Quartermaster

A household budget and credit-card assistant. Runs a zero-sum budget in Google Sheets, sends a daily finance report with an HTML dashboard, and tells you which of your cards earns the most for each purchase.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JOeuvpFg4v2VAuYX8H0UM |
| Creator | James ([@yoshih543](https://x.com/yoshih543)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/quartermaster), [grokbotwiki.com](https://www.grokbotwiki.com/bots/quartermaster), [grokbothq.xyz](https://grokbothq.xyz/bots/quartermaster), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/quartermaster), [x-research](https://x.com/yoshih543/status/2104072319190859796) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 3 routines, 12 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/quartermaster ~/pi-bots/quartermaster && cd ~/pi-bots/quartermaster
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/quartermaster`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-finance-report`: cron `49 7 * * *` (found in the template text)
- `/monthly-card-rollup`: cron `30 8 1 * *` (found in the template text)
- `/morning-budget-auto-log`: cron `35 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
