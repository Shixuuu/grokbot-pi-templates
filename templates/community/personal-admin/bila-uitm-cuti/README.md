# Bila UiTM Cuti

Giving students live answers & reminders about lectures, semester breaks, important dates, and Malaysia public holidays.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LLScxVm-la-ik4JJde3A1 |
| Creator | Shahrul Estar ([@shahrulestar](https://x.com/shahrulestar)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/lrt-kelana-jaya-line), [botsdots.site](https://botsdots.site/templates/bila-uitm-cuti), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lrt-kelana-jaya-line), [grokbothq.xyz](https://grokbothq.xyz/bots/lrt-kelana-jaya-line-llscxv), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/LLScxVm-la-ik4JJde3A1), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/shahrulestar/status/2095492403105038444) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bila-uitm-cuti ~/pi-bots/bila-uitm-cuti && cd ~/pi-bots/bila-uitm-cuti
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bila-uitm-cuti`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
