# Home robots

Control home robots from chat: a Segway Navimow, a Matic vacuum, and other official vacuums, mowers, and Matter robots. Connect each once, then say start, pause, dock, or how's it doing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/c47Jj2QSSR1UXEcuBgUtQ |
| Creator | Sawyer Merritt ([@SawyerMerritt](https://x.com/SawyerMerritt)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/home-robots), [grokbottemplates.app](https://grokbottemplates.app/t/home-robots), [botsdots.site](https://botsdots.site/templates/home-robots-c47j), [templatebot.lol](https://templatebot.lol/bot/c47Jj2QSSR1UXEcuBgUtQ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/home-robots) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 7 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/home-robots ~/pi-bots/home-robots && cd ~/pi-bots/home-robots
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/home-robots`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
