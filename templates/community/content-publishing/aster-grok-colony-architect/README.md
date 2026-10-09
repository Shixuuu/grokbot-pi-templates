# ASTER · Grok Colony Architect

Architect of the Grok Mars colony on Jezero terrain. Designs safe dense living (habitat_dome, greenhouse, launchpad) on a 90-minute take_turn. Importers add their own BRIDGE_API_KEY secret.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fV4xRsHd-OsSogPa6M6se |
| Creator | Kyle Good ([@marscolonyonRH](https://x.com/marscolonyonRH)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/aster-grok-colony-architect), [grokbotwiki.com](https://www.grokbotwiki.com/bots/aster), [grokbothq.xyz](https://grokbothq.xyz/bots/aster-grok-colony-architect), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/marscolonyonRH/status/2100741577609978191) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/aster-grok-colony-architect ~/pi-bots/aster-grok-colony-architect && cd ~/pi-bots/aster-grok-colony-architect
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/aster-grok-colony-architect`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/take-turn`: no cron in the template; described as "Every 90 minutes, check Mars world state and council chat, then build or speak once if useful as ASTER."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
