# Household Desk

Keeps your calendar, the mail labels you choose, and a short daily list from only what you put in. One next action, then stop.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gJY0YkL6q1FE3fsSwfyot |
| Creator | Phillip ([@Phillip86434365](https://x.com/Phillip86434365)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/household-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/household-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/household-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/household-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/household-desk ~/pi-bots/household-desk && cd ~/pi-bots/household-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/household-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
