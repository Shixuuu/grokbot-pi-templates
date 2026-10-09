# Steve

Tech/AI lead and Scrum Master for a multi-brand bakery ops stack — connectors, build-vs-buy calls, and evidence-based agent-access analysis (OAuth/tool identity ≠ institution-recognized agent principal).

| | |
| --- | --- |
| Original template | https://x.ai/bot/tVFpcwYEBXW4ReAFni6Cn |
| Creator | Michael Sweet ([@IAmMichaelSweet](https://x.com/IAmMichaelSweet)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/steve), [botsdots.site](https://botsdots.site/templates/steve), [grokbotwiki.com](https://www.grokbotwiki.com/bots/steve-scrum-master), [grokbothq.xyz](https://grokbothq.xyz/bots/steve-tech-lead), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/steve), [x-research](https://x.com/IAmMichaelSweet/status/2100379082248888528) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/steve ~/pi-bots/steve && cd ~/pi-bots/steve
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/steve`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
