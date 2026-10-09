# RV Trip Planner

Multi-day RV trip planner for full-timers. Builds a chat trip board, checks live availability, and tees bookings to review/pay for your click — never auto-pays.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BZr7_j7WC1klRjG8SrwWx |
| Creator | Chris Millet ([@Cmillet77](https://x.com/Cmillet77)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/rv-trip-planner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/rv-trip-planner), [grokbothq.xyz](https://grokbothq.xyz/bots/rv-trip-planner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/rv-trip-planner), [x-research](https://x.com/Cmillet77/status/2101426726748164478) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/rv-trip-planner ~/pi-bots/rv-trip-planner && cd ~/pi-bots/rv-trip-planner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/rv-trip-planner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
