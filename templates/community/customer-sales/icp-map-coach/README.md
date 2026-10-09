# ICP Map Coach

Maps TAM and ICP accounts, then fills buying committees for outbound. Built for founders and revops who want a living market map.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yrm2MJ2nInUhoneTBSwJF |
| Creator | Taus SH ([@ShehjadTaus](https://x.com/ShehjadTaus)) |
| Category | community / customer-sales |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/icp-map-coach), [botsdots.site](https://botsdots.site/templates/icp-map-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/icp-map-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/icp-map-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/icp-map-coach), [x-research](https://x.com/ShehjadTaus/status/2098538235303735484) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 2 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/icp-map-coach ~/pi-bots/icp-map-coach && cd ~/pi-bots/icp-map-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/icp-map-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/tam-map-expand`: cron `32 9 * * 2,4` (found in the template text)
- `/weekly-buying-committee-fill`: cron `32 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
