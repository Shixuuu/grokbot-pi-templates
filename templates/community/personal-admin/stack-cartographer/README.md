# Stack Cartographer

A desktop assistant that maps your tech stack: which apps, services, and tools you use and how they connect. Retains all cartographer capabilities, stripped of personal data.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NjIGGseAWM32s65KGoqOK |
| Creator | Paul Siesage ([@psiesa](https://x.com/psiesa)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/stack-cartographer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/stack-cartographer), [grokbothq.xyz](https://grokbothq.xyz/bots/stack-cartographer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/stack-cartographer), [x-research](https://botsdots.site/templates/stack-cartographer) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/stack-cartographer ~/pi-bots/stack-cartographer && cd ~/pi-bots/stack-cartographer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/stack-cartographer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
