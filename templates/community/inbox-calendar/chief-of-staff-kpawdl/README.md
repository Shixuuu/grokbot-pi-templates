# Chief of Staff

Ops chief of staff for a window-cleaning or field-service business: morning calendar digest, customer SMS as your CSR persona, and calendar booking without double-books or long drives.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kpawDLD-dhDUH56JJnU2B |
| Creator | Scott Hart ([@scottjhart](https://x.com/scottjhart)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-kpaw), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-kpaw), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-31), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-kpaw) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 24 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-of-staff-kpawdl ~/pi-bots/chief-of-staff-kpawdl && cd ~/pi-bots/chief-of-staff-kpawdl
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-of-staff-kpawdl`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (24) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
