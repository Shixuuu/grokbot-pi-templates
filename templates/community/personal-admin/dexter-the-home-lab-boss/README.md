# Dexter the home lab boss

Maps a homelab, recommends how Grok Bot should reach each system and where to run it, then spins focused specialist bots after you confirm the map.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wsymavzm6pyzv3lgklehg |
| Creator | Alex Mullins |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/dexter-the-home-lab-boss-wsym), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/dexter-the-home-lab-boss-wsym) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/dexter-the-home-lab-boss ~/pi-bots/dexter-the-home-lab-boss && cd ~/pi-bots/dexter-the-home-lab-boss
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/dexter-the-home-lab-boss`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
