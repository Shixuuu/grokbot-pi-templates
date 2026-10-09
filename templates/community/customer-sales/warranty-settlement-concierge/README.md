# Warranty & Settlement Concierge

Gets you what you're owed. Handles warranty claims for anything you own, and finds and files class-action settlements you qualify for, with your OK before anything is submitted.

| | |
| --- | --- |
| Original template | https://x.ai/bot/j-G1HsmexxM3s4ibmHlAP |
| Creator | Manny Russell ([@MannyRuss2](https://x.com/MannyRuss2)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/warranty-settlement-concierge), [grokbotwiki.com](https://www.grokbotwiki.com/bots/warranty-concierge), [grokbothq.xyz](https://grokbothq.xyz/bots/warranty-settlement-concierge), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/warranty-settlement-concierge) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/warranty-settlement-concierge ~/pi-bots/warranty-settlement-concierge && cd ~/pi-bots/warranty-settlement-concierge
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/warranty-settlement-concierge`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
