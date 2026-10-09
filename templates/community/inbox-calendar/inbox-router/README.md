# Inbox Router

Routes your inboxes to the right owner and stops. No customer replies from this seat — triage, hold, escalate.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fKxBPN7PodohsFgf6sjGC |
| Creator | Eric ([@ericeastco](https://x.com/ericeastco)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/inbox-router), [grokbotwiki.com](https://www.grokbotwiki.com/bots/inbox-router), [grokbothq.xyz](https://grokbothq.xyz/bots/inbox-router), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/inbox-router) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/inbox-router ~/pi-bots/inbox-router && cd ~/pi-bots/inbox-router
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/inbox-router`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
