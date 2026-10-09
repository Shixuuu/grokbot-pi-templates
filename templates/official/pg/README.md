# Outbound Prospecting

Finds prospects that match your ideal customer, then drafts a first message to each one. Every name is researched on the public web, and nothing sends without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/i03IaF768-ielyzegoGye |
| Creator | Krista Letz ([@kristaletz](https://x.com/kristaletz)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/pg), [grokbottemplates.app](https://grokbottemplates.app/t/pg), [botsdots.site](https://botsdots.site/templates/outbound-prospecting), [grokbotwiki.com](https://www.grokbotwiki.com/bots/outbound-prospecting), [grokbothq.xyz](https://grokbothq.xyz/bots/outbound-prospecting), [templatebot.lol](https://templatebot.lol/bot/i03IaF768-ielyzegoGye), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/pg) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 8 skills, 3 routines, 5 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/official/pg ~/pi-bots/pg && cd ~/pi-bots/pg
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/pg`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-draft-batch`: no cron in the template; described as "Every weekday morning, researches the next few names on the target list and leaves a first-touch draft for each one, waiting on your yes."
- `/friday-prospecting-recap`: no cron in the template; described as "Every Friday, what went out this week, what came back, which rows are waiting on you, and where the list is running thin."
- `/monday-list-topup`: no cron in the template; described as "Every Monday, adds new companies and named people that match your ideal customer so the list never runs dry."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
