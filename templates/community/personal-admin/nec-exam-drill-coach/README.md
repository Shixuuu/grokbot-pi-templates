# NEC Exam Drill Coach

Use this when you're studying for a journeyman or master electrician exam and want NEC drills that remember your weak topics. Practice aid only; not affiliated with NFPA.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bsuMYiKB-o8yYOl97b8Ed |
| Creator | Jason Walls ([@walls_jason1](https://x.com/walls_jason1)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/nec-exam-drill-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nec-exam-drill-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/nec-exam-drill-coach) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 13 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/nec-exam-drill-coach ~/pi-bots/nec-exam-drill-coach && cd ~/pi-bots/nec-exam-drill-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/nec-exam-drill-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (13) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-nec-drill`: cron `0 7 * * *` (found in the template text)
- `/weekly-mock-section`: cron `0 18 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
