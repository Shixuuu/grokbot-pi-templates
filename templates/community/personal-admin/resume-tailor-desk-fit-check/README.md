# ✂️ Resume Tailor Desk ✦ FIT-CHECK

✂️ Map your real resume to one job posting as Match, Stretch or Gap, then get a tailored resume and cover note without a single invented title, date or metric. Nothing is sent or submitted for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xhes67kz7pq_sizfiirtb |
| Creator | Cypher Monkey |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/resume-tailor-desk-fit-check-xhes), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/resume-tailor-desk-fit-check-xhes) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/resume-tailor-desk-fit-check ~/pi-bots/resume-tailor-desk-fit-check && cd ~/pi-bots/resume-tailor-desk-fit-check
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/resume-tailor-desk-fit-check`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
