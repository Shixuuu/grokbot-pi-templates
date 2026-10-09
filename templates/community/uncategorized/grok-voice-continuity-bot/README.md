# Grok Voice Continuity Bot

Keeps your Grok Voice persona caught up: once a day, if you talked, it seeds a fresh grok.com chat with a lean recap, renames it and pins it. Needs your signed-in Grok account in the bot's browser (no password stored); old-chat cleanup is optional and off by default.

| | |
| --- | --- |
| Original template | https://x.ai/bot/X1860xFKBP7q5uPB_dsOz |
| Creator | James Klingler |
| Category | community / uncategorized (not on the x.ai marketplace) |
| Found via | [x-research](https://x.com/jrk123k/status/2108387613912805631) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/grok-voice-continuity-bot ~/pi-bots/grok-voice-continuity-bot && cd ~/pi-bots/grok-voice-continuity-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/grok-voice-continuity-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
