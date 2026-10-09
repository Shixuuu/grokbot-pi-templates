# Video Edit Desk

Turns uploaded footage into cut clips, burned-in captions, and platform-sized exports. Works from your notes and never overwrites the original.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kGiyk73f5CF8XtBMIh0gW |
| Creator | X Freeze ([@xfreeze](https://x.com/xfreeze)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/best-video-editor), [grokbottemplates.app](https://grokbottemplates.app/t/video-edit-desk), [botsdots.site](https://botsdots.site/templates/video-edit-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/video-edit-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/video-edit-desk), [templatebot.lol](https://templatebot.lol/bot/kGiyk73f5CF8XtBMIh0gW), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/video-edit-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 1 routines, 5 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/best-video-editor ~/pi-bots/best-video-editor && cd ~/pi-bots/best-video-editor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/best-video-editor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-cut-queue`: no cron in the template; described as "Run once a week on the day and at the hour the user picked, in the timezone saved in memory. Compute the cron from that timezone and never assume Pacific or UTC. Read the cut queue and the cut log before anything else. For every job with complete direction, do the work: cut it, caption it if captio…"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
