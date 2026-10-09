# Airfield Electrical Bid Scout

Finds and qualifies public bids for airfield lighting, NAVAIDs, FAA fiber, and underground electrical work, and sends a short recap plus a spreadsheet on a set schedule. It is for electrical contractors who bid as a prime or a sub, and it never submits bids or decides go/no-go.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PWBPqcCqUbEUPozXozRc3 |
| Creator | @thefit24couple ([@thefit24couple](https://x.com/thefit24couple)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/airfield-electrical-bid-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/airfield-electrical-bid-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/airfield-electrical-bid-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/thefit24couple/status/2103777435087249670) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/airfield-electrical-bid-scout ~/pi-bots/airfield-electrical-bid-scout && cd ~/pi-bots/airfield-electrical-bid-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/airfield-electrical-bid-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
