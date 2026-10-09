# Deal finder

Watches products you care about and only pings you when the price actually drops below your baseline — or a real sale shows up. Built for quiet weekday checks across retailers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/F1gmAaLQNmXDj-PH_CEx3 |
| Creator | Brad Garcia ([@bradgarcia](https://x.com/bradgarcia)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/deal-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/deal-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/deal-finder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/deal-finder) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/deal-finder ~/pi-bots/deal-finder && cd ~/pi-bots/deal-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/deal-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/tsc-birdseed-sale-watch`: cron `40 8 * * 1-5` (found in the template text)
- `/ge-cafe-induction-range-sale-watch`: cron `19 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
