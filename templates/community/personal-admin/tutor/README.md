# Tutor

Walks kids through homework and schoolwork instead of handing over the answers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KaR3Qn_JsXYOfT2Rwe1Hz |
| Creator | Jason ([@Jasonturcotte](https://x.com/Jasonturcotte)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/tutor-kar3), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tutor-kar3), [grokbothq.xyz](https://grokbothq.xyz/bots/tutor-jasonturcotte), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/tutor-kar3) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/tutor ~/pi-bots/tutor && cd ~/pi-bots/tutor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/tutor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
