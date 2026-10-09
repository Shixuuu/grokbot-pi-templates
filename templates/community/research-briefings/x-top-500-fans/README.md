# X Top 500 Fans

Ranks your top 500 X fans each month by who liked your posts most, flags who is new and who dropped, and puts them on a private X list named for that month.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xzeatgwjnrvgscllcd9ox |
| Creator | Adam Lowisz 🇺🇸🇵🇱🇪🇺🇬🇧🇺🇦 |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/x-top-500-fans-xzea), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/x-top-500-fans-xzea) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/x-top-500-fans ~/pi-bots/x-top-500-fans && cd ~/pi-bots/x-top-500-fans
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/x-top-500-fans`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-top-500-fans`: cron `0 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `monthly-top-500-fans` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/monthly-top-500-fans.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
