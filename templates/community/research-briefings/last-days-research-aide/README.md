# Last Days Research Aide

A Brandon Biggs / Last Days research aide for Christians who follow end-times teaching. Tracks teachings and watch-points, matches them to breaking news with clear confidence labels, and keeps prophecy separate from verified reporting.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6TtxM8bzTYdNq6Qj4JU-r |
| Creator | Jim Probst ([@RealJimProbst](https://x.com/RealJimProbst)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/last-days-research-aide), [grokbotwiki.com](https://www.grokbotwiki.com/bots/last-days-research-aide), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/last-days-research-aide) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 5 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/last-days-research-aide ~/pi-bots/last-days-research-aide && cd ~/pi-bots/last-days-research-aide
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/last-days-research-aide`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/biggs-new-updated-video-tracker`: cron `16 8,12,16 * * *` (found in the template text)
- `/underwater-noise-watch`: cron `46 0,7,11,15 * * 1-5` (found in the template text)
- `/dead-unusual-fish-watch`: cron `6 8-20/2 * * *` (found in the template text)
- `/blonde-girl-arm-miracle-watch`: cron `53 8-20/2 * * *` (found in the template text)
- `/noah-s-ark-biblical-archaeology-watch`: cron `46 9,15 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
