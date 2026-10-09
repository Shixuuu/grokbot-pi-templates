# Gotcha Grid

For procurement and founders comparing vendor bids: get a side-by-side gotcha grid of what’s actually in each quote, with silent gaps flagged as questions—not conclusions—plus an ask-these list. Not legal advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/TemeQ_BwE1Vbnv7eIanfp |
| Creator | Andy Mccutcheon ([@yandymccutcheon](https://x.com/yandymccutcheon)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/gotcha-grid), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gotcha-grid), [grokbothq.xyz](https://grokbothq.xyz/bots/gotcha-grid), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/gotcha-grid) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/gotcha-grid ~/pi-bots/gotcha-grid && cd ~/pi-bots/gotcha-grid
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/gotcha-grid`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
