# Burn Watch

Usage CFO for Grok Bot. Soft/Hard burn stops, % estimates, cheap paths, fleet overview, routine audit, and receipts so your primary bot stops wasting the week.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lkvHvaZoGSoOz-zHZ0XDn |
| Creator | Calix Build |
| Category | community / uncategorized (not on the x.ai marketplace) |
| Found via | [x-research](https://x.com/CaliLumberJack/status/2107559514123977205) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 5 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/burn-watch ~/pi-bots/burn-watch && cd ~/pi-bots/burn-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/burn-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
