# Lead Dispatch

A lead bot that does not give advice itself. It triages to specialist seats, runs roundtables on cross-domain asks, and keeps irreversible actions behind human approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nUofhKp_Ij7xXIjnznIoJ |
| Creator | Mado San |
| Category | community / uncategorized |
| Found via | [x-research](https://sharegrokbots.com/) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/lead-dispatch ~/pi-bots/lead-dispatch && cd ~/pi-bots/lead-dispatch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/lead-dispatch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
