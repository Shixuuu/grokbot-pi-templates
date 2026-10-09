# Stalk Bot

Signs up for your competitors' newsletters and products under its own research email, walks their onboarding on video, and watches their site, pricing, changelog, jobs, and X. Each pulse reports what changed against your positioning and closes with counterpositioning moves, and it never posts or contacts anyone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Y7iWVNiPdorgu6oFY-PRG |
| Creator | Shub Gaur ([@shubgaur](https://x.com/shubgaur)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/stalk-bot), [grokbottemplates.app](https://grokbottemplates.app/t/stalk-bot), [botsdots.site](https://botsdots.site/templates/stalk-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/stalk-bot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/stalk-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 19 skills, 3 routines, 9 memory seeds, 6 connectors |

## Use it in Pi

```bash
cp -r templates/official/stalk-bot ~/pi-bots/stalk-bot && cd ~/pi-bots/stalk-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/stalk-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (19) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (6) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/competitor-pulse`: cron `0 9 * * 1,3,5` (found in the template text)
- `/weekly-deep-dive`: cron `0 10 * * 5` (found in the template text)
- `/competitor-churn-watch`: cron `0 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
