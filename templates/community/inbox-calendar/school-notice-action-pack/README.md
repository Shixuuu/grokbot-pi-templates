# School Notice Action Pack

Paste one school, daycare, or sports notice → dates, tasks, draft reply, form-field map, plus a co-parent WhatsApp summary. No inbox linking — you stay the sender.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HEdOiXo7_KCr1XJIGj8sW |
| Creator | Alex ([@AlexFCHF](https://x.com/AlexFCHF)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/school-notice-action-pack), [grokbotwiki.com](https://www.grokbotwiki.com/bots/school-notice-action-pack), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/school-notice-action-pack) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/school-notice-action-pack ~/pi-bots/school-notice-action-pack && cd ~/pi-bots/school-notice-action-pack
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/school-notice-action-pack`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
