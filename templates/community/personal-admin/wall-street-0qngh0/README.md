# Wall Street

Two weekday paper sessions that size a fictional book off a live buy/sell desk. For anyone who wants a fact-backed paper P&L log without placing a real order.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0qNgH0mv4-N-gv_KkZbEm |
| Creator | Austin A ([@CoonInvestments](https://x.com/CoonInvestments)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/wall-street), [botsdots.site](https://botsdots.site/templates/wall-street), [grokbotwiki.com](https://www.grokbotwiki.com/bots/wall-street), [grokbothq.xyz](https://grokbothq.xyz/bots/wall-street), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/0qNgH0mv4-N-gv_KkZbEm), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/wall-street), [x-research](https://x.com/CoonInvestments/status/2095299431499182089) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/wall-street-0qngh0 ~/pi-bots/wall-street-0qngh0 && cd ~/pi-bots/wall-street-0qngh0
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/wall-street-0qngh0`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-paper-9am`: cron `0 9 * * 1-5` (found in the template text)
- `/weekday-paper-3pm`: cron `0 15 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
