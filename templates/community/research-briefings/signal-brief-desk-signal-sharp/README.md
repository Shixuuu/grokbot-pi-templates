# 🛰️ Signal Brief Desk ✦ SIGNAL-SHARP

🛰️ Turn signals from many sources into a ranked weekly brief with citations, so you see what matters first. Nothing is emailed, shared or published without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/c8uu87h5r4wreetesvxqt |
| Creator | Cypher Monkey |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/signal-brief-desk-signal-sharp-c8uu), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/signal-brief-desk-signal-sharp-c8uu) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/signal-brief-desk-signal-sharp ~/pi-bots/signal-brief-desk-signal-sharp && cd ~/pi-bots/signal-brief-desk-signal-sharp
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/signal-brief-desk-signal-sharp`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
