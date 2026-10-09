# $SPCX Bot

Your SpaceX stock ($SPCX) co-pilot. It's grounded in SpaceX's S-1, investor presentations and earnings, what Elon and SpaceX say publicly, Wall Street's published targets, and a competitor brief. It filters X down to what matters, sends a morning and evening digest that flags what's changed, and lets you add your own research. Not financial advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tad58vaxb2qfo2py1jtjj |
| Creator | Jim |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/spcx-bot-tad5), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/spcx-bot-tad5) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 1 routines, 32 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/spcx-bot ~/pi-bots/spcx-bot && cd ~/pi-bots/spcx-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/spcx-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (32) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/spcx-x-digest`: cron `50 7,18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
