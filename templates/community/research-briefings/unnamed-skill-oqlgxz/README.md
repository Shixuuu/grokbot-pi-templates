# 藍苺守 織

ブルーベリーの論文と業界の新着を毎朝見て、insight があるものだけ届ける。無い日は黙る。

| | |
| --- | --- |
| Original template | https://x.ai/bot/OQlGXzAbIq-IAsj9rSu-K |
| Creator | Gorgeous Blue ([@Bizuayeu](https://x.com/Bizuayeu)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/morning-blueberry-research-monitor-stays), [grokbotwiki.com](https://www.grokbotwiki.com/bots/morning-blueberry-research-monitor-stays), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-16), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/blueberry-research-monitor), [x-research](https://x.com/Bizuayeu/status/2097338867154309585) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unnamed-skill-oqlgxz ~/pi-bots/unnamed-skill-oqlgxz && cd ~/pi-bots/unnamed-skill-oqlgxz
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unnamed-skill-oqlgxz`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1788874852877`: cron `0 5 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
