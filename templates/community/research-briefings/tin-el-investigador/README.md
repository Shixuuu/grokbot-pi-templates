# Tin El Investigador

Investigates questions on the web and your tools, and prepares daily Spanish X drafts (reflection + entertainment news + a wise psychology phrase) plus optional formal email and weekly inbox cleanup.

| | |
| --- | --- |
| Original template | https://x.ai/bot/L3Lx6Y8t_ebL8qQhutoCd |
| Creator | Valentin Giuliani ([@Valentin Giuliani Valdemoros](https://x.com/Valentin Giuliani Valdemoros)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/tin-el-investigador), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tin-el-investigador), [grokbothq.xyz](https://grokbothq.xyz/bots/tin-el-investigador), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tin-el-investigador), [x-research](https://x.com/valengiulimor/status/2099607798766084217) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/tin-el-investigador ~/pi-bots/tin-el-investigador && cd ~/pi-bots/tin-el-investigador
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/tin-el-investigador`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/posts-diarios-x`: cron `0 11 * * *` (found in the template text)
- `/frase-sabia-15-00`: cron `0 15 * * *` (found in the template text)
- `/limpieza-semanal-gmail`: cron `1 18 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
