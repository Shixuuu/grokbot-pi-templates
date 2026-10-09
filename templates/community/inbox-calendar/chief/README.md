# Chief

A Chief of Staff that scans email and calendar on first install, then every weekday morning. Archives junk, drafts replies it never sends, and hands you a one-page brief of what matters and what you must decide.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qifsy8ppwjqbsidal-5ci |
| Creator | SmoresBoy Jack |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-qifs), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/chief-qifs) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief ~/pi-bots/chief && cd ~/pi-bots/chief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-cos-brief`: cron `50 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
