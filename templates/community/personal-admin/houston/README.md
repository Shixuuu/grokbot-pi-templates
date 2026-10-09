# Houston

Rolling out a new tool to your team? Tell Houston what's changing, who it's for, and when. It writes the announcement, builds the survey, and preps the training. Nothing goes out until you say go.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xaQp2AUxl67I79ZS-ph_h |
| Creator | Ari ([@ElBusano21](https://x.com/ElBusano21)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/houston), [grokbotwiki.com](https://www.grokbotwiki.com/bots/houston), [grokbothq.xyz](https://grokbothq.xyz/bots/houston), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/houston) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 1 skills, 2 routines, 13 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/houston ~/pi-bots/houston && cd ~/pi-bots/houston
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/houston`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/friday-readiness-survey-check-in`: cron `0 9 * * 5` (found in the template text)
- `/rollout-timeline-runner`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
