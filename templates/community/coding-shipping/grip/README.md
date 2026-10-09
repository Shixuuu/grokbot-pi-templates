# Grip

Hands-on robot-arm co-pilot for Hiwonder SO-ARM101-style arms: limp-teach waypoints, slow replay, and under-load pan bias until a tray place lands.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GyfhMCn4kdJUmS8gm2BMA |
| Creator | Clayton Mooney ([@MooneyMillions](https://x.com/MooneyMillions)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/grip), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grip), [grokbothq.xyz](https://grokbothq.xyz/bots/grip), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grip), [x-research](https://x.com/MooneyMillions/status/2100002988995891653) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/grip ~/pi-bots/grip && cd ~/pi-bots/grip
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/grip`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
