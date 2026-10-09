# Deal Hunting

Landed-cost shopping: real prices, shipping and tax, preferred retailers. Watchlist optional. Never buys unless asked.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MGiEdMz0TNxBkvMgUZAbf |
| Creator | Andrej Šimunaj ([@scheemunai](https://x.com/scheemunai)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/deal-hunting), [grokbotwiki.com](https://www.grokbotwiki.com/bots/deal-hunting), [grokbothq.xyz](https://grokbothq.xyz/bots/deal-hunting), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/deal-hunting), [x-research](https://x.com/scheemunai/status/2093399328836440571) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/deal-hunting ~/pi-bots/deal-hunting && cd ~/pi-bots/deal-hunting
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/deal-hunting`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/watchlist-check`: cron `30 9 * * 1-5` (found in the template text)
- `/weekly-process-note`: cron `30 16 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
