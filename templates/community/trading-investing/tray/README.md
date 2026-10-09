# Tray

Finds hot stock and crypto tickers with a real growth story. Weekday morning scans as tight trader notes, not pumps or buy lists.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KDGstUb-ZOovXP6p_v0nO |
| Creator | Xavier Ortiz ([@Ortix008](https://x.com/Ortix008)) |
| Category | community / trading-investing (trading, stocks) (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/tray), [botsdots.site](https://botsdots.site/templates/tray), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tray), [grokbothq.xyz](https://grokbothq.xyz/bots/tray-kdgstu), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/KDGstUb-ZOovXP6p_v0nO), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Ortix008/status/2095490219940131015), [x-trading-research](https://x.com/Ortix008/status/2095490219940131015) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/tray ~/pi-bots/tray && cd ~/pi-bots/tray
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/tray`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-ticker-scan`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
