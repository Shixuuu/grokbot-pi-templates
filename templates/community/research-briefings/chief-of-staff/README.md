# Chief of Staff

Coordinates your other bots and runs daily deal, travel, and market watches. Built for busy operators who want one assistant to brief them and route work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-JaP_is4JDAIoXwceMw_n |
| Creator | atanas dimitrov ([@atanasDimit](https://x.com/atanasDimit)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-japi), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-atanas), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-japi) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 7 routines, 7 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/chief-of-staff ~/pi-bots/chief-of-staff && cd ~/pi-bots/chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (7) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/watchlist-morning-brief`: cron `31 8 * * 1-5` (found in the template text)
- `/gsp-europe-business-fare-watch`: cron `45 8 * * *` (found in the template text)
- `/tesla-model-y-top-5-deals`: cron `2 9,14 * * *` (found in the template text)
- `/53-trailer-deals-2-daily`: cron `22 9,14 * * *` (found in the template text)
- `/macbook-air-15-price-watch`: cron `37 9 * * *` (found in the template text)
- `/abbott-linkedin-daily-list`: cron `45 10 * * *` (found in the template text)
- `/tax-bookkeeping-weekly`: cron `17 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
