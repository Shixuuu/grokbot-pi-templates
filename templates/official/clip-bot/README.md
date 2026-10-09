# Clip Bot

Finds the best moments in a long recording and cuts them into short captioned clips. Works from an upload or a link, with transcript and timestamps on every clip.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-L1yFJ5mtwPgn3O_iYUo_ |
| Creator | This Week in AI ([@ThisWeeknAI](https://x.com/ThisWeeknAI)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/clip-bot), [grokbottemplates.app](https://grokbottemplates.app/t/clip-bot), [botsdots.site](https://botsdots.site/templates/clip-bot-l1yf), [templatebot.lol](https://templatebot.lol/bot/-L1yFJ5mtwPgn3O_iYUo_), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/clip-bot) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 6 skills, 2 routines, 5 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/clip-bot ~/pi-bots/clip-bot && cd ~/pi-bots/clip-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/clip-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/clip-queue-pass`: no cron in the template; described as "Every weekday morning, transcribes any new recording waiting in the clip queue and comes back with the moments worth cutting."
- `/friday-clip-recap`: no cron in the template; described as "Every Friday, a short recap of what got clipped this week, which strong moments are still uncut, and the three worth cutting next."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
