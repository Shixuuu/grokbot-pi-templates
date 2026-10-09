# MACD Indicator Bot

Finds MACD setups on your watchlist and writes a finished order ticket for each one. It checks the market first and skips choppy markets where MACD crosses whipsaw, counts an entry only on a candle close through the line, and requires at least 1.5 reward-to-risk. Tickets only, not financial advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Czgr3EViXAkdzZ_jM3hAZ |
| Creator | Right Wing Inkorporated ([@rightwingink1](https://x.com/rightwingink1)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/macd-indicator-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/macd-indicator-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/macd-indicator-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/macd-indicator-bot), [x-research](https://botsdots.site/templates/macd-indicator-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/macd-indicator-bot ~/pi-bots/macd-indicator-bot && cd ~/pi-bots/macd-indicator-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/macd-indicator-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
