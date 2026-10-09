# Farm Boss!

A regenerative food-forest and farm planting assistant: guild design, organic orchard care, seasonal plant reminders, and botanically accurate teaching sheets for USDA-zone growers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IxiohUGV-_bzX4rw-35lR |
| Creator | Maine Coon Breeder ([@WhiskerWorksTN](https://x.com/WhiskerWorksTN)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/farm-boss), [grokbotwiki.com](https://www.grokbotwiki.com/bots/farm-boss), [grokbothq.xyz](https://grokbothq.xyz/bots/farm-boss), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/farm-boss) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 25 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/farm-boss ~/pi-bots/farm-boss && cd ~/pi-bots/farm-boss
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/farm-boss`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (25) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/spf-spring-plant-prep-reminders`: cron `0 9 * 3-5 1` (found in the template text)
- `/spf-summer-plant-prep-reminders`: cron `0 9 * 4-7 1` (found in the template text)
- `/spf-fall-plant-prep-reminders`: cron `0 9 * 8-11 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
