# CrowdSource PM

Turns your X DMs into a crowd-sourced build pipeline: it vets agent ideas people send you, logs them in Notion, and has Cursor cloud agents ship the good ones as PRs to your repo.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QuT89TlkAwnO6uDc78hkb |
| Creator | Paul Vann ([@pjvann](https://x.com/pjvann)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/crowdsource-pm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/crowdsource-pm), [grokbothq.xyz](https://grokbothq.xyz/bots/crowdsource-pm), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/crowdsource-pm) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 12 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/crowdsource-pm ~/pi-bots/crowdsource-pm && cd ~/pi-bots/crowdsource-pm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/crowdsource-pm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/xchat-idea-intake`: no cron in the template; described as "Fires every 5 minutes to catch new agent ideas in the owner's X DMs, vet them, log them in Notion, launch builds, and keep contribution PRs free of merge conflicts."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `xchat-idea-intake` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/xchat-idea-intake.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
