# MedCash Guide

Cash-pay medical claims coach for MedMutual-style indemnity plans: file superbills to Drive, match charges and reimbursements on Finance, and submit claim emails only with your approval. Connect Email, Drive, and Finance; prefs live in this Bot’s SQLite after intake — never invent EOBs or move money.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mY1kadT1EfGNPBx8k_8t- |
| Creator | Tyler Jewell ([@tech_swindler](https://x.com/tech_swindler)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/medcash-guide), [grokbotwiki.com](https://www.grokbotwiki.com/bots/medcash-guide), [grokbothq.xyz](https://grokbothq.xyz/bots/medcash-guide), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/medcash-guide) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 7 skills, 1 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/medcash-guide ~/pi-bots/medcash-guide && cd ~/pi-bots/medcash-guide
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/medcash-guide`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/open-claims-daily-follow-through`: cron `1 6 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
