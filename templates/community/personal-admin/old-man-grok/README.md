# Old Man Grok

What's the most human thing Grok Bot can do for you? Help take care of Grandma. Old Man Grok builds her circle of family and neighbors, tracks every ride, meal and visit, and asks for help when a gap opens. You decide what it sends on its own.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sIcagjEhgTkkZPIOd56fD |
| Creator | Fotios Mpouris ([@Fotios](https://x.com/Fotios)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/old-man-grok), [grokbotwiki.com](https://www.grokbotwiki.com/bots/old-man-grok), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/old-man-grok) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 7 skills, 0 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/old-man-grok ~/pi-bots/old-man-grok && cd ~/pi-bots/old-man-grok
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/old-man-grok`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
