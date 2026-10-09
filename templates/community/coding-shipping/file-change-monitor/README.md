# File Change Monitor

Watches the important files on your PC (hosts file, SSH keys, shell profiles, system binaries and drivers, drop folders, ransomware signs) with a read-only SHA-256 baseline. It reports only what was added, removed, or changed, to you or your IDS lead.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hx5ACy3v6cN9dwyOje57y |
| Creator | Ritvik Indupuri |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/file-change-monitor), [grokbothq.xyz](https://grokbothq.xyz/bots/file-change-monitor), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/file-change-monitor) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/file-change-monitor ~/pi-bots/file-change-monitor && cd ~/pi-bots/file-change-monitor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/file-change-monitor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/file-integrity-rescan`: cron `40 9,13,17,21 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
