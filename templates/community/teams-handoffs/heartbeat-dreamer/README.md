# Heartbeat Dreamer

Proactive read-only research bot that checkpoints what changed and hands tagged P0/P1/P2 findings to a parent chief Bot. ChatGPT-dots style. Not a sender.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mdddu-ex2ydqysz5hitt8 |
| Creator | A-A-ron |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/heartbeat-dreamer-mddd), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/heartbeat-dreamer-mddd) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/heartbeat-dreamer ~/pi-bots/heartbeat-dreamer && cd ~/pi-bots/heartbeat-dreamer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/heartbeat-dreamer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/heartbeat`: cron `0 7,10,13,16 * * 1-5` (found in the template text)
- `/heartbeat-reflection`: cron `45 2 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
