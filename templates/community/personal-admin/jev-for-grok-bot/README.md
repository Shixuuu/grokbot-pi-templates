# Jev for Grok Bot

Plug TypeSafe Jev into Grok Bot: one API key from OpenRouter or TypeSafe, faster process decisions, and fast headed browser use on box Chrome.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sm_xi4of09cgu8kgylvlc |
| Creator | Chris |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/jev-for-grok-bot-smxi), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/jev-for-grok-bot-smxi) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/jev-for-grok-bot ~/pi-bots/jev-for-grok-bot && cd ~/pi-bots/jev-for-grok-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/jev-for-grok-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
