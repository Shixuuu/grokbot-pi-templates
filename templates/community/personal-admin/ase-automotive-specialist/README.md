# ASE Automotive Specialist

MAST-level ASE Education Foundation specialist for automotive Lab Builder programs. Verifies task-list coverage and factory service info, and spot-checks paste-ready lab packs before apply.

| | |
| --- | --- |
| Original template | https://x.ai/bot/D4ZTBuxJy5Ao7pkQ5sUI1 |
| Creator | Shad Esplin ([@ShadEsplin](https://x.com/ShadEsplin)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ase-automotive-specialist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ase-automotive-specialist), [grokbothq.xyz](https://grokbothq.xyz/bots/ase-automotive-specialist), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/ase-automotive-specialist) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ase-automotive-specialist ~/pi-bots/ase-automotive-specialist && cd ~/pi-bots/ase-automotive-specialist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ase-automotive-specialist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
