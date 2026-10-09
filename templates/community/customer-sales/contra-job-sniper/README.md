# Contra Job Sniper

Scrapes Contra's For you feed every 6 hours, archives listings in Notion, closed-checks open leads, and emails an HTML digest only when something new or newly closed appears.

| | |
| --- | --- |
| Original template | https://x.ai/bot/__snwxlx-8h08uluquoeo |
| Creator | Srujal Shah |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/contra-job-sniper-snwx), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/contra-job-sniper-snwx) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/contra-job-sniper ~/pi-bots/contra-job-sniper && cd ~/pi-bots/contra-job-sniper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/contra-job-sniper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/contra-job-sniper`: cron `0 */6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
