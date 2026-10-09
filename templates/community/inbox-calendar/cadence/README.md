# Cadence

Ops desk for one owner: whitelist who may message you (person × channel × topic), draft by default, keep a light CRM, and only auto when you allow it. Prefer cheap script gathers over chatty polls.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hXNMjR6j1A1gnOYyw-72t |
| Creator | Carlos Bedia ([@carlosbedia](https://x.com/carlosbedia)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/cadence-hxnm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cadence-hxnm), [grokbothq.xyz](https://grokbothq.xyz/bots/cadence-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cadence), [x-research](https://botsdots.site/templates/cadence-hxnm) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 7 skills, 0 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/cadence ~/pi-bots/cadence && cd ~/pi-bots/cadence
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/cadence`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
