# Nom Nom

A calorie tracker for anyone who wants a simple food log. It records meals, remembers named recipes, keeps a running daily total, and sends an end-of-day wrap-up.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bdcSxv_pSQEH0E571N_fC |
| Creator | Nikola Babic ([@NikolaFYI](https://x.com/NikolaFYI)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/nom-nom), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nom-nom), [grokbothq.xyz](https://grokbothq.xyz/bots/nom-nom), [templatebot.lol](https://templatebot.lol/bot/bdcSxv_pSQEH0E571N_fC), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/nom-nom) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/nom-nom ~/pi-bots/nom-nom && cd ~/pi-bots/nom-nom
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/nom-nom`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/end-of-day-calories`: cron `0 21 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
