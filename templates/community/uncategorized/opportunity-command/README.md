# OPPORTUNITY COMMAND

Finds tenders, RFPs, grants and other paid opportunities, checks you're eligible, scores each out of 100, and prepares bid packs. It never submits, sends or spends without your approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IfyVKr11P40pNcTle4-ow |
| Creator | Armstrong Too - toe |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/arms_too/status/2108137726163996848) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 8 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/opportunity-command ~/pi-bots/opportunity-command && cd ~/pi-bots/opportunity-command
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/opportunity-command`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
