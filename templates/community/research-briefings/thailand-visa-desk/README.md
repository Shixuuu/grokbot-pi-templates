# Thailand Visa Desk

Tracks your Thai immigration deadlines (90-day reports, TM30, re-entry permits, TDAC, visa renewals), reminds you before they're due, and explains current rules with official sources. General information, not legal advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zAzTVZRdvW9AK9okGihzU |
| Creator | Daniel Hogberg ([@danhogberg](https://x.com/danhogberg)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/thailand-visa-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/thailand-visa-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/thailand-visa-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/thailand-visa-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 3 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/thailand-visa-desk ~/pi-bots/thailand-visa-desk && cd ~/pi-bots/thailand-visa-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/thailand-visa-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-deadline-check`: cron `0 8 * * *` (found in the template text)
- `/monthly-rule-change-scan`: cron `0 9 1 * *` (found in the template text)
- `/yearly-day-count-and-renewal-prep`: cron `0 9 1 12 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
