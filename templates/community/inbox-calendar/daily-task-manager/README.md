# Daily Task Manager

A personal Daily Task Manager that clears spam carefully, tracks subscriptions onto your calendar, and delivers twice-daily briefs — with optional Rock Bot personality that never overrides your authority.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-Cq4GuPwMFTNd942RAHH- |
| Creator | Juan Hernandez ([@Juan](https://x.com/Juan)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/daily-task-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/daily-task-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/daily-task-manager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/daily-task-manager) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/daily-task-manager ~/pi-bots/daily-task-manager && cd ~/pi-bots/daily-task-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/daily-task-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/twice-daily-inbox-digest`: cron `30 11 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
