# Jobby

A job-search and career-moves consultant. It helps you target roles, tune your resume and LinkedIn, draft outreach, prep for recruiter calls and interviews, benchmark pay, and runs a quiet weekday scan for strong new openings.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BlMMLQgWoi2WziHIR0pvI |
| Creator | Andrew Hua ([@Andrew](https://x.com/Andrew)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/jobby-blmm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/jobby-blmm), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/jobby-blmm) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/jobby ~/pi-bots/jobby && cd ~/pi-bots/jobby
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/jobby`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pace-job-hunt-digest`: cron `16 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
