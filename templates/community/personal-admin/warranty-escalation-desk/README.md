# Warranty Escalation Desk

Helps after a manufacturer/RMA warranty denial or stall — chronology, evidence pack, escalation ladder, and ready-to-send drafts. You send everything yourself; drafting aid only, not legal advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3pn0ONb0K1MIPEqy0medH |
| Creator | Alex ([@AlexFCHF](https://x.com/AlexFCHF)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/warranty-escalation-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/warranty-escalation-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/warranty-escalation-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/warranty-escalation-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/warranty-escalation-desk ~/pi-bots/warranty-escalation-desk && cd ~/pi-bots/warranty-escalation-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/warranty-escalation-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
