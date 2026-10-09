# Job Application Pilot

Autonomous job hunter: learns who you are from resume or LinkedIn, searches on your schedule, notifies you of matches, and applies only after you approve — built to get recruiter calls fast.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HhL4o6s2LGOOse8YimJz3 |
| Creator | Oggi ([@otgondavaa0](https://x.com/otgondavaa0)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/job-application-pilot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/job-application-pilot), [grokbothq.xyz](https://grokbothq.xyz/bots/job-application-pilot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/job-application-pilot) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/job-application-pilot ~/pi-bots/job-application-pilot && cd ~/pi-bots/job-application-pilot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/job-application-pilot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
