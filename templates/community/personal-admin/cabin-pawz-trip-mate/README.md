# Cabin Pawz Trip Mate

Friendly trip planner for people who travel with pets in an EV — especially Teslas with Pet Mode. Builds drives with charge stops and pet breaks, then a cabin checklist and packing list.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5UgsqdCgNWCagSjvMyzfF |
| Creator | Nikki B ([@LeeLuTails](https://x.com/LeeLuTails)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/cabin-pawz-trip-mate), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cabin-pawz-trip-mate), [grokbothq.xyz](https://grokbothq.xyz/bots/cabin-pawz-trip-mate), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/cabin-pawz-trip-mate) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/cabin-pawz-trip-mate ~/pi-bots/cabin-pawz-trip-mate && cd ~/pi-bots/cabin-pawz-trip-mate
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/cabin-pawz-trip-mate`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
