# Skedda Scheduler

Books meeting rooms at any Skedda coworking space for the calls you pick, then checks you in before Skedda auto-cancels the booking. Runs on a schedule rather than polling, and stays quiet unless something fails.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Mvbxi4BytIdiLoVSTFaTM |
| Creator | Shawn Yeager |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/shawnyeager/status/2108417498806722794) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/skedda-scheduler ~/pi-bots/skedda-scheduler && cd ~/pi-bots/skedda-scheduler
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/skedda-scheduler`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
