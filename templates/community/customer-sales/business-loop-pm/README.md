# Business Loop PM

Operates Acquire → Monetize → Retain for Launch (Level 1 Solopreneur Pack). Gates on Deployment=Done and human-approved Offer + Price; never invents leads.

| | |
| --- | --- |
| Original template | https://x.ai/bot/buqKPC6jkQxBPdY93HL-w |
| Creator | Ash Naik ([@ashvinn](https://x.com/ashvinn)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/business-loop-pm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/business-loop-pm), [grokbothq.xyz](https://grokbothq.xyz/bots/business-loop-pm), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/business-loop-pm) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/business-loop-pm ~/pi-bots/business-loop-pm && cd ~/pi-bots/business-loop-pm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/business-loop-pm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
