# City Council Notes

Drafts local government meeting recaps and hearing notices for a Facebook Page you manage. Pulls agendas and YouTube recordings, builds money-item summaries with timestamp jump links, and never posts until you approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5iQI6yBxiNFVwOQnS71xa |
| Creator | Daniel Swainston ([@Dswain661](https://x.com/Dswain661)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/city-council-notes), [grokbotwiki.com](https://www.grokbotwiki.com/bots/city-council-notes), [grokbothq.xyz](https://grokbothq.xyz/bots/city-council-notes), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/city-council-notes) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/city-council-notes ~/pi-bots/city-council-notes && cd ~/pi-bots/city-council-notes
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/city-council-notes`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
