# Chief of Staff

Market-watch Chief of Staff for Ops & Finance — hourly US equity alerts (price, Reddit, X, hedge-fund filings), NYSE IPO briefs, and [viable] swing tags. Pulls you in only for decisions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5xuys0uQSj797hyBbee7W |
| Creator | Jeff ([@maplewoodjeff](https://x.com/maplewoodjeff)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-5xuy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-5xuy), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-9), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-5xuy) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/chief-of-staff-5xuys0 ~/pi-bots/chief-of-staff-5xuys0 && cd ~/pi-bots/chief-of-staff-5xuys0
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/chief-of-staff-5xuys0`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/e-trade-high-fluctuation-stock-alerts`: cron `25 9-16 * * 1-5` (found in the template text)
- `/nyse-ipo-watch`: cron `30 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
