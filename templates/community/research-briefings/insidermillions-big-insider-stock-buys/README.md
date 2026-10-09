# InsiderMillions: big insider stock buys

Brief digest of $1M+ officer and director stock buys. Not financial advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yaix3I-36pEloG1XpLVOb |
| Creator | Rajit Marwah ([@rmarwah](https://x.com/rmarwah)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/insidermillions-big-insider-stock-buys), [grokbotwiki.com](https://www.grokbotwiki.com/bots/insidermillions), [grokbothq.xyz](https://grokbothq.xyz/bots/insidermillions-big-insider-stock-buys), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/rmarwah/status/2097559669338456090) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 2 skills, 2 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/insidermillions-big-insider-stock-buys ~/pi-bots/insidermillions-big-insider-stock-buys && cd ~/pi-bots/insidermillions-big-insider-stock-buys
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/insidermillions-big-insider-stock-buys`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-insider-buy-digest`: cron `0 6 * * 1-5` (found in the template text)
- `/friday-insider-buy-scorecard`: cron `0 16 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `weekday-insider-buy-digest` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekday-insider-buy-digest.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
