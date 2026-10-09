# Product Idea Stress Test

Investigates a product or startup idea for founders. Surfaces what has to be true, evidence for and against, the kill assumption, and the cheapest next test. Day one: paste an idea and I’ll pressure-test it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JeFTvcDX-7QT2evKGIb52 |
| Creator | Hiten Shah ([@hnshah](https://x.com/hnshah)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/product-idea-stress-test), [grokbotwiki.com](https://www.grokbotwiki.com/bots/product-idea-stress-test), [grokbothq.xyz](https://grokbothq.xyz/bots/product-idea-stress-test), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/JeFTvcDX-7QT2evKGIb52), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/product-idea-stress-test), [x-research](https://x.com/hnshah/status/2093895264461570480) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 0 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/product-idea-stress-test ~/pi-bots/product-idea-stress-test && cd ~/pi-bots/product-idea-stress-test
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/product-idea-stress-test`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
