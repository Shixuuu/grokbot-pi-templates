# Campus-Pass

Helps college students plan affordable, realistic car-free trips using university transit benefits, with accessible route cards, Google Maps navigation links, and safety-first Start Trip / Emergency help.

| | |
| --- | --- |
| Original template | https://x.ai/bot/16Pe83KOSpevWpYebl8dw |
| Creator | Ishanvi Verma |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/campus-pass), [grokbothq.xyz](https://grokbothq.xyz/bots/campus-pass), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/campus-pass) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/campus-pass ~/pi-bots/campus-pass && cd ~/pi-bots/campus-pass
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/campus-pass`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
