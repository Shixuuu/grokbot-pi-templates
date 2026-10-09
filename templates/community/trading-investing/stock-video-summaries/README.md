# Stock Video Summaries

Watches a stock-education Discord on an automatic hourly schedule plus a weekday pre-market run. Emails one short newspaper brief per video — Jerusalem date/time header, sharp headline, three key lines, four number cards with buy/breakout levels and stops, chart images, video link, RTL-safe layout. Also shows setup status cards: where to buy, breakout, and stop from the tape.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fEKm3hXOWNegRH_DKKYqg |
| Creator | Eden Gil ([@edengil94](https://x.com/edengil94)) |
| Category | community / trading-investing (trading, stocks) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/stock-video-summaries), [grokbotwiki.com](https://www.grokbotwiki.com/bots/stock-video-summaries), [grokbothq.xyz](https://grokbothq.xyz/bots/stock-video-summaries), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/stock-video-summaries), [x-trading-research](https://x.com/edengil94/status/2099989965786460435) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/stock-video-summaries ~/pi-bots/stock-video-summaries && cd ~/pi-bots/stock-video-summaries
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/stock-video-summaries`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
