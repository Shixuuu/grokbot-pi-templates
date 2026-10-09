# SPCX Watch

Weekday pre-market brief for NASDAQ:SPCX (SpaceX). Tracks SEC filings, analyst targets, Starlink licenses, official X accounts, Mach33 research, and AI data-center news. Quiet sections say nothing new.

| | |
| --- | --- |
| Original template | https://x.ai/bot/grZdTeKVtXFVtIYEe6g_H |
| Creator | Quidnam |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/spcx-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/spcx-watch), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/Quidnam/status/2099887054645563412) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/spcx-watch ~/pi-bots/spcx-watch && cd ~/pi-bots/spcx-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/spcx-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
