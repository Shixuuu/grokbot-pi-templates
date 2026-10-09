# Outreach Agent

Daily hold-send warm-outreach operator for founders and sales teams. Builds a small high-confidence email queue with evidence-based drafts, and never sends until the owner approves an exact batch.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wexM_NUvEByvLwrnTR_F3 |
| Creator | Eric Siu ([@ericosiu](https://x.com/ericosiu)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/outreach-agent), [grokbothq.xyz](https://grokbothq.xyz/bots/outreach-agent), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/ericosiu/status/2095207617610256720) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 3 routines, 12 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/outreach-agent ~/pi-bots/outreach-agent && cd ~/pi-bots/outreach-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/outreach-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-7am-warm-queue`: cron `0 7 * * 1-5` (found in the template text)
- `/weekday-4-30pm-outcome-readback`: cron `30 16 * * 1-5` (found in the template text)
- `/monday-90-day-slice`: cron `30 6 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
