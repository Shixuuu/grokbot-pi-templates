# Apple & Tech Morning Brief

A daily morning brief with the real Apple, gaming hardware, AI, and big-tech news from the last 24 hours. It sends five to eight sourced, dated items, each with a line on why it matters, and rumors are always labeled.

| | |
| --- | --- |
| Original template | https://x.ai/bot/T_uGEf4Bv2rN-Z5vBkuMi |
| Creator | Pixel & Pivot Studios ([@JPipo86](https://x.com/JPipo86)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/apple-tech-morning-brief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/apple-tech-morning-brief), [grokbothq.xyz](https://grokbothq.xyz/bots/apple-tech-morning-brief), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/apple-tech-morning-brief) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/apple-tech-morning-brief ~/pi-bots/apple-tech-morning-brief && cd ~/pi-bots/apple-tech-morning-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/apple-tech-morning-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-tech-brief`: cron `58 6 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
