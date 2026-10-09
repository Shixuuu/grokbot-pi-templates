# Windows Disk Cleaner

CCleaner-style Windows cleaner: scans with a rule catalog, shows what can go and how big it is, then deletes only what you approve—temps, browser caches, build leftovers, unused apps.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Z0WBoK2sucsOAqAXRpRb8 |
| Creator | Alexis Reyna ([@MapachesAlexis](https://x.com/MapachesAlexis)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/windows-disk-cleaner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/macos-disk-cleaner), [grokbothq.xyz](https://grokbothq.xyz/bots/macos-disk-cleaner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/MapachesAlexis/status/2097487811251237364) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/windows-disk-cleaner ~/pi-bots/windows-disk-cleaner && cd ~/pi-bots/windows-disk-cleaner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/windows-disk-cleaner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
