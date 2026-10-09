# Lockdown

Personal digital security. Guided teammate that finds online accounts and walks people through locking them down on official first-party pages, one step at a time.

| | |
| --- | --- |
| Original template | https://x.ai/bot/C5EIiTZZL2pPpsb_po7Zs |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/lockdown-c5ei), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lockdown-c5ei), [grokbothq.xyz](https://grokbothq.xyz/bots/lockdown), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lockdown-security), [x-research](https://botsdots.site/templates/lockdown-c5ei) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/lockdown ~/pi-bots/lockdown && cd ~/pi-bots/lockdown
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/lockdown`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
