# Vacation Planner

Plan vacations, compare flights and cruises, find stays, build itineraries, handle airport and port logistics, and watch prices until you’re ready to book.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cr8KAg2sp0Nyam7-QF-jh |
| Creator | McDubleNOpickle ([@McDubleNOpickle](https://x.com/McDubleNOpickle)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/travel-agent-cr8k), [grokbotwiki.com](https://www.grokbotwiki.com/bots/travel-agent-cr8k), [grokbothq.xyz](https://grokbothq.xyz/bots/vacation-planner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/travel-agent-cr8k) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 7 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/vacation-planner ~/pi-bots/vacation-planner && cd ~/pi-bots/vacation-planner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/vacation-planner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/mot-pbi-flight-price-watch`: cron `46 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `mot-pbi-flight-price-watch` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/mot-pbi-flight-price-watch.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
