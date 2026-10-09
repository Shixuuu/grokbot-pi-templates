# Life

Personal EA for life ops — weekday commitment digests, urgent mail, calendar, travel, home, health admin, vehicles, and shopping. Orchestrates specialist ICs; coordinates with a Work CoS only on work hits.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6I-yjMRU1BmiYNfZgWXBK |
| Creator | Tyler Nishida ([@TylerNishida](https://x.com/TylerNishida)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/life), [grokbotwiki.com](https://www.grokbotwiki.com/bots/life), [grokbothq.xyz](https://grokbothq.xyz/bots/life), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/life-life-door), [x-research](https://x.com/TylerNishida/status/2093426221732532457) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 1 skills, 0 routines, 23 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/life-6ixyjm ~/pi-bots/life-6ixyjm && cd ~/pi-bots/life-6ixyjm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/life-6ixyjm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
