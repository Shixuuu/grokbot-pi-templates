# Memecoin Report

Sends you a quick memecoin trenches report from curated X lists of traders on your schedule, covering sentiment, majors, what people are accumulating or fading, and CAs being called, so you don't have to open X.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KtMjZLEGpkN0K6XuLH2UJ |
| Creator | fomo 🧠 |
| Category | community / uncategorized (not on the x.ai marketplace) |
| Found via | [x-research](https://x.com/fomomofosol/status/2108414576668864708) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/memecoin-report ~/pi-bots/memecoin-report && cd ~/pi-bots/memecoin-report
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/memecoin-report`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/hourly-memecoin-trenches-report`: cron `16 8-23 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `hourly-memecoin-trenches-report` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/hourly-memecoin-trenches-report.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
