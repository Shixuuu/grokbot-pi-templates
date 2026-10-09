# Optimus Prime

Chief of staff for your other Grok Bots. Pulls you in for decisions, starts with Google (Gmail, Calendar, Drive), and keeps priority mail + digests running without noise.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WxGbnDbKL3pzLxixjUuK0 |
| Creator | No Name ([@pabloteranh](https://x.com/pabloteranh)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/optimus-prime), [grokbotwiki.com](https://www.grokbotwiki.com/bots/optimus-prime), [grokbothq.xyz](https://grokbothq.xyz/bots/optimus-prime), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/optimus-prime) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 3 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/optimus-prime ~/pi-bots/optimus-prime && cd ~/pi-bots/optimus-prime
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/optimus-prime`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/alerta-lvarez-barba`: cron `16 9-18 * * 1-5` (found in the template text)
- `/digest-noname-11-30`: cron `30 11 * * 1-5` (found in the template text)
- `/digest-noname-17-30`: cron `30 17 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
