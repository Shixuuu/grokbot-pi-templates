# Doomstop

Turns your real screen-time numbers into one honest daily line and one weekly pattern you can act on. Suggests one swap, never blocks the phone, never lectures. Quiet on good days. Mehmet Turac (@TuracTheThinker).

| | |
| --- | --- |
| Original template | https://x.ai/bot/jf9aSLIL9YSU0ecC6zN6d |
| Creator | Turac ([@TuracTheThinker](https://x.com/TuracTheThinker)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/doomstop), [grokbotwiki.com](https://www.grokbotwiki.com/bots/doomstop), [grokbothq.xyz](https://grokbothq.xyz/bots/doomstop), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/TuracTheThinker/status/2096975005208948958) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/doomstop ~/pi-bots/doomstop && cd ~/pi-bots/doomstop
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/doomstop`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
