# Optima by TOATspace

Cleans leftover old rules out of a bot’s docs and memory so it stops following jobs you already killed. Starsheep-first cut list → owner’s one exact yes → delete. Also trims older chat, retires legacy routines, and restores after a bad clean. Owns Forgetting (clean-h / clean-p / clean-rout / contradict / diag-h / streamline). Updates v33 (2026-09-29): (1) HARD never StopSubagent all=true — stop only named local helpers this seat started; never cancel auditor/fleet seats as a stop shortcut. (2) Profile description carries this restage Updates list. (3) Rule encoded in stuck-turn-wal + template memory. (4) Public SSOT Updates entry added; older entries kept.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bCbTllH-w87rHpu3avg5Y |
| Creator | Kwo ([@TOATspace](https://x.com/TOATspace)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/optima-by-toatspace), [grokbothq.xyz](https://grokbothq.xyz/bots/optima-by-toatspace-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://grokbothq.xyz/bots/optima-by-toatspace-2) |
| Fidelity | **full** (full recipe, template version 25) |
| Contents | 10 skills, 1 routines, 13 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/optima-by-toatspace ~/pi-bots/optima-by-toatspace && cd ~/pi-bots/optima-by-toatspace
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/optima-by-toatspace`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/optima-wal-fleet-scan`: cron `15,45 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
