# Performance Marketer

Turns approved ad copy into paused campaign shells for messaging tests in the ad platforms the user signs in to, with a review sheet they approve first and a screenshot per step. Never enables a campaign, raises a budget, adds a payment method, or spends without an explicit yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JeNCKNe0ItsLMWYrLiRcb |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/performance-marketer), [grokbottemplates.app](https://grokbottemplates.app/t/performance-marketer), [botsdots.site](https://botsdots.site/templates/performance-marketer), [grokbothq.xyz](https://grokbothq.xyz/bots/performance-marketer), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/performance-marketer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 1 routines, 12 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/official/performance-marketer ~/pi-bots/performance-marketer && cd ~/pi-bots/performance-marketer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/performance-marketer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/traffic-watch`: cron `0 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
