# Weekly One-Pager

Paste your week's numbers and notes and get a one-page business report, with measured figures kept apart from estimates and no gaps filled with guesses.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JB6agCG1OcwHqjwIrkl_O |
| Creator | aaron creech ([@AMFoxtrot](https://x.com/AMFoxtrot)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/weekly-one-pager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/weekly-one-pager), [grokbothq.xyz](https://grokbothq.xyz/bots/weekly-one-pager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/weekly-one-pager) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 3 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/weekly-one-pager ~/pi-bots/weekly-one-pager && cd ~/pi-bots/weekly-one-pager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/weekly-one-pager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/friday-numbers-call`: cron `0 16 * * 5` (found in the template text)
- `/monday-week-ahead`: cron `15 8 * * 1` (found in the template text)
- `/monthly-roll-up`: cron `0 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
