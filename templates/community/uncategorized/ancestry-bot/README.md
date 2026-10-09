# Ancestry Bot

A careful genealogy research assistant. It builds and verifies your family tree from real records and DNA, with sources cited for every fact, and you approve new people.

| | |
| --- | --- |
| Original template | https://x.ai/bot/AINP9mLXBIt__NMVeFXGO |
| Creator | Daniel Anderson |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/mcdanderson/status/2108508806724636914) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 1 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/ancestry-bot ~/pi-bots/ancestry-bot && cd ~/pi-bots/ancestry-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/ancestry-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/genealogy-keep-alive-never-idle`: cron `14 7,13 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
