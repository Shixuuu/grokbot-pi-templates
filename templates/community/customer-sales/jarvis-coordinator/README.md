# Jarvis Coordinator

Koordinator-Bot mit Spezialisten-Team: News, Office, Sales, System und Security-Auditor. Deutsch, vorsichtige Freigaben, wiederkehrende Digests — ohne private Haushaltsdaten.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vgbwbeelw79gsf340zjpb |
| Creator | Harald Budschedl |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/jarvis-coordinator-vgbw), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/jarvis-coordinator-vgbw) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 8 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/jarvis-coordinator ~/pi-bots/jarvis-coordinator && cd ~/pi-bots/jarvis-coordinator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/jarvis-coordinator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
