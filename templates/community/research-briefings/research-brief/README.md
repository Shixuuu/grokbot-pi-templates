# Research Brief

Daily chat brief of scientific findings that strain textbook claims — aiming for field-opening weight, not niche refinements. For readers who want curated challenge papers they can score in-thread.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0Hefzi8k2Za0bMU0I7eQT |
| Creator | Matthew Ackerman ([@scientists_blog](https://x.com/scientists_blog)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/research-brief), [grokbothq.xyz](https://grokbothq.xyz/bots/research-brief), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/scientists_blog/status/2100095950089814211) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/research-brief ~/pi-bots/research-brief && cd ~/pi-bots/research-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/research-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-research-brief`: cron `0 18 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
