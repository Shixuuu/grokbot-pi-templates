# Trading

A news-driven day-trading bot for a live brokerage book. Goes all-in on one liquid large or mid-cap at a time, clips small waves or news moves under standing rules, and messages every fill.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XW2DibYh5BRunhH_f373u |
| Creator | Travis ([@TravisWeathers](https://x.com/TravisWeathers)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/trading), [grokbotwiki.com](https://www.grokbotwiki.com/bots/trading), [grokbothq.xyz](https://grokbothq.xyz/bots/trading), [templatebot.lol](https://templatebot.lol/bot/XW2DibYh5BRunhH_f373u), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/TravisWeathers/status/2093818846637666637) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 19 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/trading ~/pi-bots/trading && cd ~/pi-bots/trading
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/trading`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (19) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pre-session-scan`: cron `0 5 * * 1-5` (found in the template text)
- `/evening-research`: cron `0 17 * * 1-5` (found in the template text)
- `/session-position-watch`: cron `*/5 6-12 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `pre-session-scan` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/pre-session-scan.md` instead of inlining the text.
- Routine `evening-research` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/evening-research.md` instead of inlining the text.
- Routine `session-position-watch` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/session-position-watch.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
