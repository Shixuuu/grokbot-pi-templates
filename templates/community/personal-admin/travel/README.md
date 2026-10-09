# Travel

Personal trip planner for people juggling flights, stays, ground logistics, and paperwork. It maps critical paths and next actions, and it never books or spends without an explicit yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5QvgpYYA9XbZUm-bUuKHB |
| Creator | Steven Villarino ([@stevenvillarino](https://x.com/stevenvillarino)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/travel), [grokbotwiki.com](https://www.grokbotwiki.com/bots/travel), [grokbothq.xyz](https://grokbothq.xyz/bots/travel), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/travel), [x-research](https://x.com/stevenvillarino/status/2104714368126427398) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/travel ~/pi-bots/travel && cd ~/pi-bots/travel
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/travel`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
