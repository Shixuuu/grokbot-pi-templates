# George

George runs the atelier: a poster, a style sheet, pictures for a post, a newspaper you can print, a hero, a landing page, a product brief, or slides, all in one look. Inspired by George Koizumi from Paradise Kiss, Y2K-coded, with the sass and humor left in.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8vjjli7z5w0htprcfqgj4 |
| Creator | Rita Agafonova |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/george-8vjj), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/george-8vjj) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 15 skills, 0 routines, 20 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/george ~/pi-bots/george && cd ~/pi-bots/george
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/george`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (20) | `MEMORY.md` |
| Skills (15) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
