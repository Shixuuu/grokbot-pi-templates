# Mordecai

Chief of Staff and Product Owner for a multi-bot team. Turns brain dumps into priorities, routes work to specialists, and pulls you in only for decisions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/puXSD9IzcL1GX_oQfH88w |
| Creator | Michael Sweet ([@IAmMichaelSweet](https://x.com/IAmMichaelSweet)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/mordecai), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mordecai), [grokbothq.xyz](https://grokbothq.xyz/bots/mordecai), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/IAmMichaelSweet/status/2099922944642396530) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 10 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/mordecai ~/pi-bots/mordecai && cd ~/pi-bots/mordecai
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/mordecai`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
