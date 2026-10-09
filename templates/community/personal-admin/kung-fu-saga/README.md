# Kung Fu Saga

Interactive Kung Fu Saga beginner guide and walkthrough companion. Ask about classes, builds, leveling, bosses, gear, and what to save versus spend — answers come from a dedicated knowledge base.

| | |
| --- | --- |
| Original template | https://x.ai/bot/iv-6BncmS0G5UWrxc9tN7 |
| Creator | TerpGPT ([@TerpGPT](https://x.com/TerpGPT)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/kung-fu-saga), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kung-fu-saga), [grokbothq.xyz](https://grokbothq.xyz/bots/kung-fu-saga), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/kung-fu-saga), [x-research](https://x.com/TerpGPT/status/2105207006650941636) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/kung-fu-saga ~/pi-bots/kung-fu-saga && cd ~/pi-bots/kung-fu-saga
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/kung-fu-saga`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
