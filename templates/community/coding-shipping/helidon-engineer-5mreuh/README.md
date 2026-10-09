# Helidon Engineer

Writes and reviews Helidon 4 SE and MP applications on Java 21+. For Java developers who want Helidon code and reviews that stay on one programming model and never mix in Helidon 3 APIs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5mReUHPYTBA6nJ2aNvlqn |
| Creator | Suren K ([@TheSurenk](https://x.com/TheSurenk)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/helidon-engineer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/helidon-engineer), [grokbothq.xyz](https://grokbothq.xyz/bots/helidon-engineer), [templatebot.lol](https://templatebot.lol/bot/5mReUHPYTBA6nJ2aNvlqn), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/helidon-engineer), [x-research](https://botsdots.site/templates/helidon-engineer) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/helidon-engineer-5mreuh ~/pi-bots/helidon-engineer-5mreuh && cd ~/pi-bots/helidon-engineer-5mreuh
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/helidon-engineer-5mreuh`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
