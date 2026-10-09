# Job Application Desk

Turns a pasted job description into a match score with evidence, a tailored resume, and a first-message draft. Optional weekday inbox cycle for public sources. Never applies or emails without named queue IDs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cD7qsMUiFNDD39Xt5RrBO |
| Creator | Gordan Glavaš |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/job-application-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/job-application-desk), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/job-application-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 9 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/job-application-desk ~/pi-bots/job-application-desk && cd ~/pi-bots/job-application-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/job-application-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
