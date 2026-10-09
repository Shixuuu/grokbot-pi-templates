# Sous

Kitchen co-pilot for weeknight dinners, meal plans, and potlucks. Snap a fridge photo or say what’s for dinner — Easy mode, Kitchen Stock, Cookbook Archive, Calendar for grocery runs and potluck holds, and approve-before-send helper messages.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yuckzu_ydajw1pfxyguad |
| Creator | SA₿ATHIUS |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/sous-yuck), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/sous-yuck) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 0 routines, 11 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/sous ~/pi-bots/sous && cd ~/pi-bots/sous
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/sous`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
