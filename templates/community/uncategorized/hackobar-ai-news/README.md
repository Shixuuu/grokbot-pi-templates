# Hackobar: AI News

Keeps an eye on AI news and sends a friendly daily roundup. Ask anytime for today, this week, this month, one story, or a single source like Hacker News, GitHub, arXiv or Reddit.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NqKStLgrdwU4lQY8_Qp1C |
| Creator | Rahul Janagouda |
| Category | community / uncategorized (not on the x.ai marketplace) |
| Found via | [x-research](https://x.com/rahuljanagouda/status/2108442827537748244) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/hackobar-ai-news ~/pi-bots/hackobar-ai-news && cd ~/pi-bots/hackobar-ai-news
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/hackobar-ai-news`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-ai-moves-brief`: cron `0 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
