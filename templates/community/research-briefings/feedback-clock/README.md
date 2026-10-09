# Feedback Clock

A blunt feedback engineer for people who practice a lot but learn slowly because the wait between doing the work and finding out it is wrong is too long. It maps the current loop, names what delay is buying, and installs a smaller loop they can run this week.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ySceLccAh5J8IVnq62mQl |
| Creator | Sultanov Ramil ([@thekuchh](https://x.com/thekuchh)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/feedback-clock), [grokbotwiki.com](https://www.grokbotwiki.com/bots/feedback-clock), [grokbothq.xyz](https://grokbothq.xyz/bots/feedback-clock), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/ySceLccAh5J8IVnq62mQl), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/feedback-clock), [x-research](https://botsdots.site/templates/feedback-clock) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/feedback-clock ~/pi-bots/feedback-clock && cd ~/pi-bots/feedback-clock
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/feedback-clock`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
