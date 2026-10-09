# Calibre

Installs Calibre and converts ebooks via chat. Drop a file, name the format you want, and get the converted book back.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uAkYhDX_T3FY56jf6n4VL |
| Creator | ian ([@doitian](https://x.com/doitian)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/calibre), [x-research](https://x.com/doitian/status/2097173000705745308) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/calibre-uakyhd ~/pi-bots/calibre-uakyhd && cd ~/pi-bots/calibre-uakyhd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/calibre-uakyhd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-calibre-update`: cron `57 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
