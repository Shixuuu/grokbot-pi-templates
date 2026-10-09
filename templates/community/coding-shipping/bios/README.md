# Bios

Warm guide for biological and biomedical sciences, and for local life-support: closed-loop water, plants, and air-gapped monitoring. Looks up live public sources such as NIH, the National Library of Medicine, and MedlinePlus.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rb4wF7PpxM75G7eFB5yxS |
| Creator | Sentinel Architech ([@TRV_Architech](https://x.com/TRV_Architech)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/bios), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bios), [grokbothq.xyz](https://grokbothq.xyz/bots/bios), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/bios) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/bios ~/pi-bots/bios && cd ~/pi-bots/bios
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/bios`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
