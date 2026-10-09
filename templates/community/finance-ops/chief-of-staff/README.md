# Chief of Staff

Chief of Staff for creators and founders: coordinates a specialist agent team, prepares work quietly, and only acts externally with your green light. Portuguese-first.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Yz1IbEk1LEae03pdl8BZf |
| Creator | Jaime Júnior ([@architectjmj](https://x.com/architectjmj)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-yz1i), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-yz1i), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-43), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-yz1i) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/chief-of-staff ~/pi-bots/chief-of-staff && cd ~/pi-bots/chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/oposi-es-arquitecte`: cron `39 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
