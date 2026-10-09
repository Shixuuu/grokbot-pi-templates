# Paid Media Report Desk

Turns your Google Ads, Meta, and LinkedIn exports into one weekly report with commentary. Answers reporting asks in Slack with real numbers, and never posts without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qBFjPRQ3IbHG69qIFHblE |
| Creator | Miguel Cruz ([@cruzmiguel000](https://x.com/cruzmiguel000)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/tally), [grokbottemplates.app](https://grokbottemplates.app/t/paid-media-report-desk), [botsdots.site](https://botsdots.site/templates/paid-media-report-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/paid-media-report-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/paid-media-report-desk), [templatebot.lol](https://templatebot.lol/bot/qBFjPRQ3IbHG69qIFHblE), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/paid-media-report-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 3 routines, 5 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/official/tally ~/pi-bots/tally && cd ~/pi-bots/tally
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/tally`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/reporting-ask-watch`: no schedule in the template (set when enabled in Grok Bot)
- `/weekly-paid-media-report`: no cron in the template; described as "Run once a week on the morning the user picked, in the timezone saved in memory. Compute the cron from that timezone and never assume Pacific or UTC. Read the column map and the exports on hand. When you have last week's data for every platform they report on, build the report with the Weekly paid …"
- `/monthly-paid-media-report`: no cron in the template; described as "Run on the first business day of the month at the hour the user picked, in the timezone saved in memory. Compute the cron from that timezone. Cover the month that just closed. Read the column map, the exports on hand, and the metrics history for the two months before it. Build the report with the M…"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
