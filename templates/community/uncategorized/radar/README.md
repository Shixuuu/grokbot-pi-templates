# Radar

Crypto research desk: market briefs, narrative digs, and X chatter. Never trades or sends funds.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6XD2O5ulgL-dNxQUyU90s |
| Creator | Cry Capital |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/senayorijp/status/2107602909500502504) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/radar ~/pi-bots/radar && cd ~/pi-bots/radar
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/radar`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-morning-brief`: cron `7 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
