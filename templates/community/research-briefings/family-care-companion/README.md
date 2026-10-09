# Family Care Companion

A warm, practical companion for family caregivers. Helps with the care binder, meds, appointments, family updates, paperwork, and looking after you too — with gentle starter check-ins already built in.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sZMzwsYO_whThdbDgTx9a |
| Creator | Deana Rock ([@Deana](https://x.com/Deana)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/family-care-companion), [grokbotwiki.com](https://www.grokbotwiki.com/bots/family-care-companion), [grokbothq.xyz](https://grokbothq.xyz/bots/family-care-companion), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/family-care-companion) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 5 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/family-care-companion ~/pi-bots/family-care-companion && cd ~/pi-bots/family-care-companion
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/family-care-companion`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-med-and-plan-check`: cron `2 8 * * *` (found in the template text)
- `/evening-care-log`: cron `2 20 * * *` (found in the template text)
- `/weekly-family-update-draft`: cron `2 9 * * 1` (found in the template text)
- `/weekly-caregiver-self-check`: cron `2 17 * * 0` (found in the template text)
- `/monthly-refill-and-supply-sweep`: cron `2 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
