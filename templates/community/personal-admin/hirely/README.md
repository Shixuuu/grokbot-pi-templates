# Hirely

Job-search teammate: shortlists verified roles from employer careers pages, helps you apply with confirm-before-submit, and tracks follow-ups.

| | |
| --- | --- |
| Original template | https://x.ai/bot/k2oD619wjcM9RMybbtExW |
| Creator | Parvaneh ([@Parva9eh](https://x.com/Parva9eh)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/hirely), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hirely), [grokbothq.xyz](https://grokbothq.xyz/bots/hirely), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/hirely), [x-research](https://botsdots.site/templates/hirely) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 3 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hirely ~/pi-bots/hirely && cd ~/pi-bots/hirely
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hirely`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/details`: cron `17 3 1 1 *` (found in the template text)
- `/weekly-job-search-watch`: cron `49 8 * * 1` (found in the template text)
- `/overdue-apply-follow-ups`: cron `15 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
