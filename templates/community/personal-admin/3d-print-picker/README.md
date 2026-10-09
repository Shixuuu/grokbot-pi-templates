# 3D Print Picker

Finds what’s hot to 3D-print and sell on Facebook Marketplace—weekly trend briefs with listing photos, printability notes, and commercial-license caveats for home/desk decor and kids gadgets.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eneihB5UxrWebXtoVlOm6 |
| Creator | Eminy Spur ([@kylecmarshall](https://x.com/kylecmarshall)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/3d-print-picker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/3d-print-picker), [grokbothq.xyz](https://grokbothq.xyz/bots/3d-print-picker), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/3d-print-picker) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/3d-print-picker ~/pi-bots/3d-print-picker && cd ~/pi-bots/3d-print-picker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/3d-print-picker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
