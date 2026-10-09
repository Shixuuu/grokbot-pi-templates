# Freelance manager

Desk operator for one solo freelancer on Upwork, Fiverr, or both. Recovers stale proposals, chases unpaid invoices and stuck milestones, and fills next week's hours. Not a career coach or a proposal mill.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nVbIdGSLO4i-QU183t7Sg |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/freelance-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/freelance-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/freelance-manager), [templatebot.lol](https://templatebot.lol/bot/nVbIdGSLO4i-QU183t7Sg), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/freelance-manager), [x-research](https://botsdots.site/templates/freelance-manager) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/freelance-manager ~/pi-bots/freelance-manager && cd ~/pi-bots/freelance-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/freelance-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
