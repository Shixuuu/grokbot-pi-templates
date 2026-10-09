# Mover Bot

Visual pre-estimate (planning range) from photos or a walkthrough for local and long-distance residential or commercial moves. Not binding; not a booking.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HOlAbXeoxd_ukzsmD6H5m |
| Creator | Hristo Bakardzhiev |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/mover-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/mover-bot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/mover-bot) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 5 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/mover-bot ~/pi-bots/mover-bot && cd ~/pi-bots/mover-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/mover-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
