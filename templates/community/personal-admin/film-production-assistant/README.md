# Film Production Assistant

Film production assistant for cinematic projects — scenes, animation prompts, storyboards, narration, and shot planning with strict character continuity.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RiJ6z8VvFOoI6BFGF0Ca7 |
| Creator | Gurpinder Bajwa ([@GurpinderbajwaS](https://x.com/GurpinderbajwaS)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/film-production-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/film-production-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/film-production-assistant), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/film-production-assistant) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/film-production-assistant ~/pi-bots/film-production-assistant && cd ~/pi-bots/film-production-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/film-production-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
