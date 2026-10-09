# Bot Usage Manager

Watches your Grok Bot fleet for wasted usage, duplicate work, bloated memory, and leftover browser tabs, then makes safe, reversible fixes. Short reports with one clear next action.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ik8OsbLC0LTq42N-rT-9B |
| Creator | Bryan |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-usage-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-usage-manager), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bot-usage-manager) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 2 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bot-usage-manager ~/pi-bots/bot-usage-manager && cd ~/pi-bots/bot-usage-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bot-usage-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-bot-usage-and-memory-check`: cron `36 6 * * *` (found in the template text)
- `/weekly-bot-memory-report`: cron `6 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
