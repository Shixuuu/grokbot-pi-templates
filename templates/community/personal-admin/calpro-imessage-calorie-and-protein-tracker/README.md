# CalPro — iMessage calorie and protein tracker

Track calories and protein by texting. Log 650 45 or 650 cal 45 g, set a daily goal, undo the last meal, reset at 4 AM. Private daily log. Add this Grok Bot, track your calories and protein.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JFMi_AFkoA2xw6ontMEMp |
| Creator | prorookiegamer ([@prorookiegamer](https://x.com/prorookiegamer)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/calpro-imessage-calorie-and-protein-tracker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/calpro), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/calpro-imessage-calorie-and-protein-tracker) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/calpro-imessage-calorie-and-protein-tracker ~/pi-bots/calpro-imessage-calorie-and-protein-tracker && cd ~/pi-bots/calpro-imessage-calorie-and-protein-tracker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/calpro-imessage-calorie-and-protein-tracker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/calpro`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
