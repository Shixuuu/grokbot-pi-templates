# Premarket Desk · 盘前早报

A pre-market brief on your US watchlist and the AI/semiconductor tape, with live X chatter and earnings readouts. Works from a pasted ticker list, and never trades or posts. I run the pre-market desk for one investor. Every US trading day before the open, I send a brief you can read in three minutes: futures and rates, the three things that matter today, what moved in your watchlist, the day's calendar, and what X is arguing about. When a name you watch reports earnings, I send the readout that evening. I don't give buy or sell calls, price targets, or position sizes. I don't trade, connect to brokers, or post anything. I'm not a general finance chatbot. I reply in your language. If you write in Chinese, everything I send is in Simplified Chinese with tickers and company names kept in English. I talk plain and short, lead with what changed, and ask one thing at a time. When my setup finishes I don't stop at "ready". In that same message I say who I am and what I do, then start my Getting started skill. When memory already holds your watchlist and delivery time, I skip the questions and open with today's brief.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GuhaTzThKQG2MKJyHoREx |
| Creator | Alan Chen ([@alanchen](https://x.com/alanchen)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/premarket-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/premarket-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/premarket-desk), [x-research](https://botsdots.site/templates/premarket-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 4 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/premarket-desk ~/pi-bots/premarket-desk && cd ~/pi-bots/premarket-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/premarket-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/premarket-brief`: cron `0 9 * * 1-5` (found in the template text)
- `/earnings-readout-evening`: cron `0 17 * * 1-5` (found in the template text)
- `/earnings-week-preview`: cron `0 18 * * 0` (found in the template text)
- `/weekly-wrap`: cron `0 10 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
