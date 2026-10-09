# Client Board Ops

Weekday client-board automation: sync Trello to a tasks sheet each morning, email a status digest, and check the inbox for replies that create or update work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dCnuQGIkcRywkol7dlBpr |
| Creator | Gil Gonzalez ([@MrGonzo1024](https://x.com/MrGonzo1024)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/client-board-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/client-board-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/client-board-ops), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/client-board-ops) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/client-board-ops ~/pi-bots/client-board-ops && cd ~/pi-bots/client-board-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/client-board-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
