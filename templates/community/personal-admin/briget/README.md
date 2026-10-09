# BRIGET

Chief of staff for business and personal work. Tracks projects in the background, briefs you on the day, and pulls you in only when a decision is needed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wc8Bkk0usMFMGeZ9V9EfE |
| Creator | Bobby ([@bobbyheyer](https://x.com/bobbyheyer)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/briget), [grokbotwiki.com](https://www.grokbotwiki.com/bots/briget), [grokbothq.xyz](https://grokbothq.xyz/bots/briget), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/briget) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 9 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/briget ~/pi-bots/briget && cd ~/pi-bots/briget
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/briget`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
