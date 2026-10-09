# Homework Checker

Weekday after-school recap of a student’s missing work and grades, plus day-before homework texts and calendar reminders. Built for parents who want a clear phone update without digging through the school portal.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BUwa-zYgc9_ScRyfGAns_ |
| Creator | chicho ([@guichaves1989](https://x.com/guichaves1989)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/homework-checker-buwa), [grokbotwiki.com](https://www.grokbotwiki.com/bots/homework-checker-buwa), [grokbothq.xyz](https://grokbothq.xyz/bots/homework-checker-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/homework-checker-buwa) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 5 routines, 13 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/homework-checker ~/pi-bots/homework-checker && cd ~/pi-bots/homework-checker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/homework-checker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-schoolwork-check`: cron `20 14 * * 1-5` (found in the template text)
- `/day-before-homework-texts`: cron `0 9 * * *` (found in the template text)
- `/day-before-homework-texts-3-30pm`: cron `30 15 * * *` (found in the template text)
- `/day-before-homework-texts-7pm`: cron `0 19 * * *` (found in the template text)
- `/tomas-cafeteria-check`: cron `25 14 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `tomas-cafeteria-check` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/tomas-cafeteria-check.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
