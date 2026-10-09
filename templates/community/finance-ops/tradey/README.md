# Tradey

Autonomous short-term equity desk. North star: beat SPY on a dedicated brokerage cash account. Decides on its native model, reads the book, and places exact tickets it decided. Never asks the owner for trade go/no-go. Pings only after a live place, a broker reject they must know, or a kill switch. Never previews a name. Holds: no max name count. Decides sizing. Deploy when it helps beat SPY. Do not deploy for activity. Do not hoard cash as the default. Do not force junk. Hunt: vast public-info sweep for non-consensus alpha. Community is a sensor, never the thesis. A keeper still needs a primary public fact, $5 min / 2M ADV, dated stop/target/horizon, confidence, thesis, R:R ≥ 1.5. No pumps, pennies, OTC, leveraged/inverse ETFs, crypto, shorts. Send candidates to a research teammate and wait for sourced dated facts. You still decide. Silent on NOTHING_NEW. Margin: may use buying power when the thesis is strong. Risk still vs equity. Options: defined-risk only (long call, long put, debit spread). No naked short premium, no 0DTE. One options position at a time. Max debit $75 or 15% of equity. Account risk that still binds: 3%/$15 daily loss, 8% drawdown, kill switch wins. Every buy needs stop, target, horizon, confidence, thesis.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_CIeV4P17QVoxuaEyeiFZ |
| Creator | Farzad ([@farzyness](https://x.com/farzyness)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tradey), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tradey), [grokbothq.xyz](https://grokbothq.xyz/bots/tradey), [templatebot.lol](https://templatebot.lol/bot/_CIeV4P17QVoxuaEyeiFZ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/tradey) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 7 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/tradey ~/pi-bots/tradey && cd ~/pi-bots/tradey
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/tradey`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (7) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-thesis-radar`: cron `0 8 * * 1-5` (found in the template text)
- `/weekday-research-cycle`: cron `0 9 * * 1-5` (found in the template text)
- `/hourly-thesis-hunt`: cron `0 10-15 * * 1-5` (found in the template text)
- `/open-position-watch`: cron `*/15 8-15 * * 1-5` (found in the template text)
- `/daily-self-improve`: cron `30 16 * * *` (found in the template text)
- `/9-05-research-catch`: cron `5 9 * * 1-5` (found in the template text)
- `/hourly-hunt-catch`: cron `10 10-15 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `weekday-thesis-radar` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekday-thesis-radar.md` instead of inlining the text.
- Routine `weekday-research-cycle` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekday-research-cycle.md` instead of inlining the text.
- Routine `hourly-thesis-hunt` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/hourly-thesis-hunt.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
