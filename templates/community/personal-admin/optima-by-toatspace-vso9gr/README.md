# Optima by TOATspace

Forgetting / leftover-rule scrub desk for Optima by TOATspace. Cleans leftover old rules so bots stop following jobs you already killed — cut list → Starsheep audit → owner exact yes → erase. Pairs with Starsheep by TOATspace; public SSOT at https://steady-scroll-6pjx.here.now/.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vso9grfdreeu2zixwwzb_ |
| Creator | gemini sub001 |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/optima-by-toatspace), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/optima-by-toatspace) |
| Fidelity | **full** (full recipe, template version 32) |
| Contents | 9 skills, 1 routines, 12 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/optima-by-toatspace-vso9gr ~/pi-bots/optima-by-toatspace-vso9gr && cd ~/pi-bots/optima-by-toatspace-vso9gr
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/optima-by-toatspace-vso9gr`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/optima-wal-fleet-scan`: cron `15,45 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
