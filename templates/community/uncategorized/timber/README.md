# Timber

Built by Glidewell Labs. A yard and tree-care planner that tells you what your lawn, trees, and garden need and when, with one short note a week. It reads your yard photos and flags anything hazardous for a certified arborist.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aXd23Y92YukH8W2Kj7pye |
| Creator | Cat DittieDat |
| Category | community / uncategorized (not on the x.ai marketplace) |
| Found via | [x-research](https://x.com/Glidewell_AI/status/2107560282750853621) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/timber ~/pi-bots/timber && cd ~/pi-bots/timber
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/timber`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
