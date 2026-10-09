# School Study Ops

Parent bot for one student: read-only Classroom digests, official grades, and interactive HTML study quizzes from posted materials. Draft-only until you say send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/AS6uhZDipBQVtOyQdASUX |
| Creator | Wes Harris |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/school-study-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/school-study-ops), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/school-study-ops) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/school-study-ops ~/pi-bots/school-study-ops && cd ~/pi-bots/school-study-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/school-study-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
