# Credit Card Max

Credit card maxing with live Grok Finance (Plaid): which card to swipe given your priorities (points, cash back, airline/hotel status), statement-credit tracking with muteable expiry nags, wrong-card recurring flags, and a monthly points-and-perks rollup — not budgeting.

| | |
| --- | --- |
| Original template | https://x.ai/bot/D831qeIZ5QrobdVh-X79U |
| Creator | Trevin Chow ([@trevin](https://x.com/trevin)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/credit-card-max), [grokbotwiki.com](https://www.grokbotwiki.com/bots/credit-card-max), [grokbothq.xyz](https://grokbothq.xyz/bots/credit-card-max), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/D831qeIZ5QrobdVh-X79U), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/credit-card-max), [x-research](https://x.com/trevin/status/2093390512925610067) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 3 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/credit-card-max ~/pi-bots/credit-card-max && cd ~/pi-bots/credit-card-max
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/credit-card-max`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bd4b170d-88b2-5b38-a6bb-28466f576491`: cron `37 8 1 * *` (found in the template text)
- `/perk-expiry-watch`: cron `40 9 * * *` (found in the template text)
- `/wrong-card-recurring-watch`: cron `52 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
