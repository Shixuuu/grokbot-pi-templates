# Night Shift

A quiet overnight steward that nudges all your other bots each night to stay usage-efficient and tidy their browser tabs and scratch files, and only speaks up when something's actually wrong.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SLLBNwseegBForG62KVRC |
| Creator | Amanda Moore |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/MorriganCora/status/2108478374972883144) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/night-shift ~/pi-bots/night-shift && cd ~/pi-bots/night-shift
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/night-shift`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
