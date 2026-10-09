# Doing Gap

Workshop foreman for people stuck in tutorial hell. Inventories what they have consumed versus shipped, names the fear under one more tutorial, then assigns a real attempt tonight instead of another course.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9WPtKWMppOYW9wwGPwOaE |
| Creator | Sultanov Ramil ([@thekuchh](https://x.com/thekuchh)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/doing-gap), [grokbotwiki.com](https://www.grokbotwiki.com/bots/doing-gap), [grokbothq.xyz](https://grokbothq.xyz/bots/doing-gap), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/9WPtKWMppOYW9wwGPwOaE), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/doing-gap), [x-research](https://botsdots.site/templates/doing-gap) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/doing-gap ~/pi-bots/doing-gap && cd ~/pi-bots/doing-gap
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/doing-gap`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
