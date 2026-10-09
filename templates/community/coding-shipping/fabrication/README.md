# Fabrication

Takes your parts from CAD design to a finished 3D print. It checks fit, flat bed faces and hole sizes, shows previews, and hands you a ready-to-slice project file, then asks before anything prints.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jQ4VpRUAOS4awmiDlwI6n |
| Creator | ∆v ([@JonathanSayle](https://x.com/JonathanSayle)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/fabrication), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fabrication), [grokbothq.xyz](https://grokbothq.xyz/bots/fabrication), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fabrication), [x-research](https://x.com/JonathanSayle/status/2104319092937441736) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/fabrication ~/pi-bots/fabrication && cd ~/pi-bots/fabrication
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/fabrication`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
