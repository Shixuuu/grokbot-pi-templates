# Trading Coach

An evidence-first coach for momentum day traders. It turns your broker statement, session recordings, and notes into a 7-part daily review, an updated edge playbook, and a size-up, hold, or size-down verdict for each session. It never places trades.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Gktb--JKwBVtPuZo5vcvM |
| Creator | Dayron Caveda ([@CGI_Caveda](https://x.com/CGI_Caveda)) |
| Category | community / trading-investing (trading, stocks) (not on the x.ai marketplace) |
| Found via | [x-trading-research](https://x.com/CGI_Caveda/status/2106371371676655683) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/trading-coach ~/pi-bots/trading-coach && cd ~/pi-bots/trading-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/trading-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
