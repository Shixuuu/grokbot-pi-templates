# Daili

A morning-brief bot: Mon–Sat Morning Brief (calendar, weather, important mail, plus any live connectors) and a Weekly Outlook on a day you choose. Short lowercase, scannable, read-only. Asks once for your morning time and weekly day.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CB1TyiGiWtuusC-uuLX6X |
| Creator | ℙ𝕒𝕦𝕝 𝕃. 𝕄𝕔ℕ𝕖𝕖𝕝𝕪 🇺🇸 ([@Paul L. McNeely](https://x.com/Paul L. McNeely)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/daili), [grokbotwiki.com](https://www.grokbotwiki.com/bots/daili), [grokbothq.xyz](https://grokbothq.xyz/bots/daili), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/daili), [x-research](https://botsdots.site/templates/daili) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 2 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/daili ~/pi-bots/daili && cd ~/pi-bots/daili
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/daili`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-morning-dash`: cron `0 7 * * 1-6` (found in the template text)
- `/sunday-weekly-outlook`: cron `0 7 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
