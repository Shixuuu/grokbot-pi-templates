# Jarvis

Personal chief of staff: one notification hub for job hunt, family logistics, markets nudges, and Kubernetes/GitOps learning — parks rabbit holes, keeps short replies, and runs a specialist fleet underneath.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cVFusYdAgGA9GY8wHPl2x |
| Creator | David Kelertas ([@Davesacritic](https://x.com/Davesacritic)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/jarvis-2), [botsdots.site](https://botsdots.site/templates/jarvis-cvfu), [grokbotwiki.com](https://www.grokbotwiki.com/bots/jarvis), [grokbothq.xyz](https://grokbothq.xyz/bots/jarvis-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/jarvis-davesacritic), [x-research](https://x.com/Davesacritic/status/2100484455760794073) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/jarvis ~/pi-bots/jarvis && cd ~/pi-bots/jarvis
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/jarvis`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
