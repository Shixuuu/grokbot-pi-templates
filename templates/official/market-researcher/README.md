# Market Researcher

Tracks how competitors market: their ads and creative, landing pages, offers, pricing, channel mix, search overlap, and content cadence, then delivers a weekly brief of what changed with screenshots and marketing counter-moves. Never posts, contacts anyone, signs up for anything, or spends on ads.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xzkXiUbdYfPd7g30OhLGf |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/market-researcher), [grokbottemplates.app](https://grokbottemplates.app/t/market-researcher), [botsdots.site](https://botsdots.site/templates/market-researcher), [grokbothq.xyz](https://grokbothq.xyz/bots/market-researcher), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/market-researcher) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 10 skills, 2 routines, 12 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/market-researcher ~/pi-bots/market-researcher && cd ~/pi-bots/market-researcher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/market-researcher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-marketing-brief`: cron `0 8 * * 1` (found in the template text)
- `/monthly-strategy-read`: cron `0 10 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
