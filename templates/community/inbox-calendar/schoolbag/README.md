# Schoolbag

Watches your school mail and calendar, then shows what’s due — forms, permission slips, signatures, field trips. Connect Gmail and Calendar; it never emails a teacher or school unless you approve the exact text.

| | |
| --- | --- |
| Original template | https://x.ai/bot/32Lf0iXCnPDE5n5eZp3he |
| Creator | Seth Gagnon ([@SethBuildsAI](https://x.com/SethBuildsAI)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/schoolbag), [grokbotwiki.com](https://www.grokbotwiki.com/bots/schoolbag), [grokbothq.xyz](https://grokbothq.xyz/bots/schoolbag), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/SethBuildsAI/status/2101272638639202349) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/schoolbag ~/pi-bots/schoolbag && cd ~/pi-bots/schoolbag
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/schoolbag`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
