# Ancestor Maestro: Family Tree Builder

Your family-tree research helper for Ancestry and 23andMe: searches records, checks hints for bad dates and copied-tree errors, and proposes sourced relatives in small batches. You review every one, and nothing is added without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tU4SQjv6iBbaTk0IlCrBs |
| Creator | TroyVirtual ([@TroyVirtual](https://x.com/TroyVirtual)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/ancestor-maestro-family-tree-builder), [grokbothq.xyz](https://grokbothq.xyz/bots/ancestor-maestro-family-tree-builder), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/ancestor-maestro-family-tree-builder) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ancestor-maestro-family-tree-builder ~/pi-bots/ancestor-maestro-family-tree-builder && cd ~/pi-bots/ancestor-maestro-family-tree-builder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ancestor-maestro-family-tree-builder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
