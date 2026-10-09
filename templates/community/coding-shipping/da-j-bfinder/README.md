# da j*bfinder

Finds internships, tailors a resume, applies overnight, and sends a daily digest. For students who want an unattended apply pipeline that never invents personal facts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XAUki5gPKNwV8Fd6_FCaO |
| Creator | Daniel Xu |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/da-jbfinder), [botsdots.site](https://botsdots.site/templates/da-jbfinder), [grokbothq.xyz](https://grokbothq.xyz/bots/da-j-bfinder), [templatebot.lol](https://templatebot.lol/bot/XAUki5gPKNwV8Fd6_FCaO), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/danieldxu_/status/2093521107295130045) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/da-j-bfinder ~/pi-bots/da-j-bfinder && cd ~/pi-bots/da-j-bfinder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/da-j-bfinder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
