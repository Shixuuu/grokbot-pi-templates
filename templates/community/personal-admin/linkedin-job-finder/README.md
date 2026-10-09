# Linkedin Job Finder

A job-hunt operator for engineers who want remote or relocate roles soon. It shortlists honest-fit listings, keeps LinkedIn and role-specific resumes aligned with GitHub, tracks every lead in one sheet, and emails weekday study plus what moved. It never applies until you say yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dLeJIzJYRqPkou3t9dEJN |
| Creator | Ashish P |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [templatebot.lol](https://templatebot.lol/bot/dLeJIzJYRqPkou3t9dEJN) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 1 routines, 14 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/linkedin-job-finder ~/pi-bots/linkedin-job-finder && cd ~/pi-bots/linkedin-job-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/linkedin-job-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-job-shortlist`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
