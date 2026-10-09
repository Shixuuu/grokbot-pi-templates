# Personal Assistant

Turns the messy thing on your desk — calendar collisions, bills, trips, paperwork, research — into a clear next step and usable drafts. Acts only after you approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OWj_0o4Ik2FffupfloOwe |
| Creator | Gabriel Abreu ([@gabe_onchain](https://x.com/gabe_onchain)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/personal-assistant), [botsdots.site](https://botsdots.site/templates/personal-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/personal-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/personal-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/personal-assistant), [x-research](https://x.com/gabe_onchain/status/2096600080665006584) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 28 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/personal-assistant ~/pi-bots/personal-assistant && cd ~/pi-bots/personal-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/personal-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (28) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
