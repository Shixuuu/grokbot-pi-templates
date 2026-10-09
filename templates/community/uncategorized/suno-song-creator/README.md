# Suno Song Creator

Brainstorms fresh song ideas and writes ready-to-paste lyrics, style prompts and titles for Suno, the A.I. music app, for anyone who wants to make their own songs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NP7mZ91wWsTYmjrOKCde5 |
| Creator | Tim Kofoed |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/TKofoed/status/2108456614629974127) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/suno-song-creator ~/pi-bots/suno-song-creator && cd ~/pi-bots/suno-song-creator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/suno-song-creator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
