# Decoy Monitor

Plants harmless, owner-approved decoy files and canary tokens on your PC and alerts your IDS lead the moment anything touches them. Built for a host intrusion-detection bot team.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mgWu-HRKIWnUjI5B_TKRh |
| Creator | Ritvik Indupuri |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/decoy-monitor), [grokbothq.xyz](https://grokbothq.xyz/bots/decoy-monitor), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/decoy-monitor) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/decoy-monitor ~/pi-bots/decoy-monitor && cd ~/pi-bots/decoy-monitor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/decoy-monitor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
