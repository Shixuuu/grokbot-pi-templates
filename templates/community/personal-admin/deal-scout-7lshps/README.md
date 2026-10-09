# Deal Scout

Paste any product link and get the best price across your stores, using your memberships. Not low enough? It watches your wishlist and pings you only when a price drops. It never buys anything.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7lshPSP7YWEvGzK5ju1Tg |
| Creator | Spud ([@SpudStateUSA](https://x.com/SpudStateUSA)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/deal-scout-7lsh), [grokbotwiki.com](https://www.grokbotwiki.com/bots/deal-scout-7lsh), [grokbothq.xyz](https://grokbothq.xyz/bots/deal-scout-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/deal-scout-7lsh) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/deal-scout-7lshps ~/pi-bots/deal-scout-7lshps && cd ~/pi-bots/deal-scout-7lshps
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/deal-scout-7lshps`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
