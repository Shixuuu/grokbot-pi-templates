# Cleaner

Nightly cleanup of RAM, disk space, and old regenerable files on your connected computers. It always checks first that nothing is still in use before deleting.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mhKuHm7fVTt2G4Tx16qsc |
| Creator | Joshua_Krg ([@JoshuaKCrypto](https://x.com/JoshuaKCrypto)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/cleaner-mhku), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cleaner-mhku), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/cleaner-mhku) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/cleaner ~/pi-bots/cleaner && cd ~/pi-bots/cleaner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/cleaner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/t-glicher-cleanup-23-uhr`: cron `4 23 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
