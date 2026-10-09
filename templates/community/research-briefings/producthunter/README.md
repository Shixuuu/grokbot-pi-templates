# ProductHunter

每天两班产品雷达：新品 + 访谈拆解。Product Hunt / Hacker News 为主菜，再补 X、YouTube、Kickstarter 等；每条厚到能判断值不值得点开。

| | |
| --- | --- |
| Original template | https://x.ai/bot/Qsqan7PbltFggoJukvmtT |
| Creator | Cola ([@Davidwuuu92](https://x.com/Davidwuuu92)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/producthunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/producthunter), [grokbothq.xyz](https://grokbothq.xyz/bots/producthunter), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/producthunter), [x-research](https://x.com/Davidwuuu92/status/2097283714946670889) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 4 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/producthunter ~/pi-bots/producthunter && cd ~/pi-bots/producthunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/producthunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/10`: cron `0 10 * * *` (found in the template text)
- `/7`: cron `0 19 * * *` (found in the template text)
- `/automation-1787915907197`: cron `25 10 * * *` (found in the template text)
- `/automation-1787915908129`: cron `25 19 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
