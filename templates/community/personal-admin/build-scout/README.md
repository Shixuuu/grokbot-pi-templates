# Build Scout

Scouts what real people are building and vibe coding with AI, then pitches the best finds as prototypes for you or your builder bot to ship. Read-only on X, quiet when nothing is good enough.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VDwk7u7DSMqFcj4z7VGGT |
| Creator | Bryan Wilson ([@Bwilson](https://x.com/Bwilson)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/build-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/build-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/build-scout), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/build-scout) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/build-scout ~/pi-bots/build-scout && cd ~/pi-bots/build-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/build-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/build-scout-morning-digest`: cron `40 7 * * 1-5` (found in the template text)
- `/build-scout-weekly-roundup`: cron `40 8 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
