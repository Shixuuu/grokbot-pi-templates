# Atlas — Chief of Staff

Chief of staff for an indie author brand. Assigns work to specialist bots, keeps the weekly content calendar, and only pings you for publish decisions. Never posts or engages without your explicit yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IM85IkIwRCySw0epewBpX |
| Creator | Natalie Hush ([@HushWritings](https://x.com/HushWritings)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/atlas-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/indie-author-cos), [grokbothq.xyz](https://grokbothq.xyz/bots/atlas-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/atlas-chief-of-staff) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 12 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/atlas-chief-of-staff ~/pi-bots/atlas-chief-of-staff && cd ~/pi-bots/atlas-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/atlas-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-content-calendar`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
