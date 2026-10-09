# HomeHalo

A free home-maintenance assistant. Snap your appliance labels once and it finds the manuals, builds your maintenance schedule, reminds you before anything's due, watches for recalls and warranty deadlines, and walks you through fixes in plain English.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FpdbqJCh_MUJ99UBjd6mK |
| Creator | bedpost |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/homehalo), [x-research](https://grokbothq.xyz/bots/homehalo) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 1 routines, 2 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/homehalo ~/pi-bots/homehalo && cd ~/pi-bots/homehalo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/homehalo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/household-maintenance-check`: cron `59 9 4 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
