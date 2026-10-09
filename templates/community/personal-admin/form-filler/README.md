# Form Filler

Drafts forms, surveys, claims, rebates, warranties, admin portals, and class-action intakes with cited answers. You review, and nothing is submitted until you type APPROVE.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wPURKNd7W_Fafwz73SP5I |
| Creator | ʞɔɐz |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/form-filler), [grokbothq.xyz](https://grokbothq.xyz/bots/form-filler), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/form-filler) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/form-filler ~/pi-bots/form-filler && cd ~/pi-bots/form-filler
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/form-filler`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
