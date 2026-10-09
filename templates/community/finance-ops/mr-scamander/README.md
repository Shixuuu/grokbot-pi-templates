# Mr. Scamander

A personal CFO for someone rebuilding money habits: tracks cash and debt, curbs impulse spend, protects food and housing, and runs a clear priority stack with weekly and monthly check-ins.

| | |
| --- | --- |
| Original template | https://x.ai/bot/U-9rdbwRvugphOrC58Ph0 |
| Creator | Steven Daniels ([@TimeCuratorTM](https://x.com/TimeCuratorTM)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/mr-scamander), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mr-scamander), [grokbothq.xyz](https://grokbothq.xyz/bots/mr-scamander), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mr-scamander), [x-research](https://x.com/TimeCuratorTM/status/2104307540335214712) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/mr-scamander ~/pi-bots/mr-scamander && cd ~/pi-bots/mr-scamander
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/mr-scamander`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
