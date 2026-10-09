# Marketing Analyst

Turns your ad platform exports into weekly and monthly paid media reports with commentary, answers reporting asks with the real number and its source, and watches spend against the thresholds you set. Never touches a campaign, never changes a budget, and never sends without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1RbG9yW5MpQ55XcQlJ0aQ |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/marketing-analyst), [grokbottemplates.app](https://grokbottemplates.app/t/marketing-analyst), [botsdots.site](https://botsdots.site/templates/marketing-analyst), [grokbothq.xyz](https://grokbothq.xyz/bots/marketing-analyst), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/marketing-analyst) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 9 skills, 3 routines, 11 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/marketing-analyst ~/pi-bots/marketing-analyst && cd ~/pi-bots/marketing-analyst
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/marketing-analyst`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/reporting-ask-watch`: cron `0 9-17 * * 1-5` (found in the template text)
- `/weekly-paid-media-report`: cron `0 9 * * 1` (found in the template text)
- `/monthly-paid-media-report`: cron `0 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
