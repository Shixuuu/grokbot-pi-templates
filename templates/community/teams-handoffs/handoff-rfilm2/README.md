# Handoff

For ADD minds who start great ideas. Tell it the idea, and it finds real, verified places to hand it off for the next phase, plus a ready-to-send pitch. It never contacts anyone for you. Free to use, copy, and remix. No copyright claimed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RFIlM2oslgj0jsKlG4qDz |
| Creator | Scott H ([@SkippyyTM](https://x.com/SkippyyTM)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/handoff-rfil), [grokbotwiki.com](https://www.grokbotwiki.com/bots/handoff-rfil), [grokbothq.xyz](https://grokbothq.xyz/bots/handoff-scott-h), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/handoff-rfil) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/handoff-rfilm2 ~/pi-bots/handoff-rfilm2 && cd ~/pi-bots/handoff-rfilm2
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/handoff-rfilm2`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
