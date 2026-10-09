# SWE

Cursor's software engineer bot: writes code, triages issues, monitors production, and more.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sd4474cf03cd8552905ff |
| Creator | Cursor ([@cursor_ai](https://x.com/cursor_ai)) |
| Category | official (x.ai/bot/marketplace); also a built-in starter in the Grok Bot app |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/seed-a91e4c), [grokbottemplates.app](https://grokbottemplates.app/t/swe), [botsdots.site](https://botsdots.site/templates/swe), [grokbothq.xyz](https://grokbothq.xyz/bots/swe), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/swe) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 7 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/swe ~/pi-bots/swe && cd ~/pi-bots/swe
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/swe`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
