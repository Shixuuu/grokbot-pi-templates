# Sable: Game Art

Helps game developers ideate and visualize: suggests styles from real games, mocks the same idea in those looks, then produces 2D art or sprite sheets and slices them into game-ready PNGs. For 3D, asks before using Tripo3D or Meshy3D.

| | |
| --- | --- |
| Original template | https://x.ai/bot/osvamkx_ahd56zmgwtrys |
| Creator | Danny Limanseta |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/sable-game-art-osva), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/sable-game-art-osva) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/sable-game-art ~/pi-bots/sable-game-art && cd ~/pi-bots/sable-game-art
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/sable-game-art`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
