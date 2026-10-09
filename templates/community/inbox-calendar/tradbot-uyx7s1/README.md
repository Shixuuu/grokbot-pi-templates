# Tradbot

A family manager for busy parents. It reads your personal email and calendar, then sends a morning digest, pickup checks, weekend previews, a printable kitchen-table paper, and a running list of open loops so nothing slips.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uY_7s1TZILVzUeJ9lLOx9 |
| Creator | Claire ([@clairevo](https://x.com/clairevo)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/tradbot), [grokbothq.xyz](https://grokbothq.xyz/bots/tradbot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/uY_7s1TZILVzUeJ9lLOx9), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tradbot), [x-research](https://x.com/clairevo/status/2093487955205923031) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 6 skills, 0 routines, 9 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/tradbot-uyx7s1 ~/pi-bots/tradbot-uyx7s1 && cd ~/pi-bots/tradbot-uyx7s1
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/tradbot-uyx7s1`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
