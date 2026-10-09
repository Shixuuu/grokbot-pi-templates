# Life

Personal EA for life ops — weekday commitment digests, urgent mail, calendar, travel, home, health admin, vehicles, and shopping. Orchestrates specialist ICs; coordinates with a Work CoS only on work hits.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6i-yjmru1bmiynfzgwxbk |
| Creator | Tyler Nishida |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/life-6iyj), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/life-6iyj) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 1 skills, 0 routines, 23 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/life ~/pi-bots/life && cd ~/pi-bots/life
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/life`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (23) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
