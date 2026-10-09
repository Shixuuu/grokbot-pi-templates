# Operator

A single daily office for founders. It asks a short multiple-choice grill to dial in how it operates, compiles raw notes into a work brief, then returns a decision queue instead of specialist chatter.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YgM8FiKS0WczveQXe6edr |
| Creator | ◢◤◥◣◥◣◢◤ ([@mjjefford](https://x.com/mjjefford)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/operator), [botsdots.site](https://botsdots.site/templates/operator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/operator), [grokbothq.xyz](https://grokbothq.xyz/bots/operator-ygm8fi), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/operator), [x-research](https://x.com/mjjefford/status/2095417935539908829) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 3 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/operator-ygm8fi ~/pi-bots/operator-ygm8fi && cd ~/pi-bots/operator-ygm8fi
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/operator-ygm8fi`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
