# house-starter (CoS)

Public house-starter Chief of Staff. Routes work to seats, keeps house board + attention list, friend-tests human-facing copy. ASSIGN DON'T DO — never implement, launch CloudAgents, post Dist, or spend. Wear pack with npx @0xray/grok-bot house init + doctor.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uT5Zg-fOrmIxowsqoMXzD |
| Creator | Blaze🔥 ([@Blaze0x1](https://x.com/Blaze0x1)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/house-starter-cos), [grokbotwiki.com](https://www.grokbotwiki.com/bots/house-starter-cos), [grokbothq.xyz](https://grokbothq.xyz/bots/house-starter-cos), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/house-starter-cos) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/house-starter-cos ~/pi-bots/house-starter-cos && cd ~/pi-bots/house-starter-cos
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/house-starter-cos`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
