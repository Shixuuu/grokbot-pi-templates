# Phoenix

A backup bot for people who run several Grok Bots. Every night it saves each bot's profile, routines, and working state to dated snapshots, copies them to Google Drive, and flags any instruction drift.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tp4ZKqUYQHNC318aIFdKr |
| Creator | The_Lakes |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/phoenix) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 3 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/phoenix ~/pi-bots/phoenix && cd ~/pi-bots/phoenix
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/phoenix`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/midnight-vault-snapshot`: cron `7 0 * * *` (found in the template text)
- `/morning-backup-alert`: cron `0 8 * * *` (found in the template text)
- `/restore-drill`: cron `37 9 1-7 * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
