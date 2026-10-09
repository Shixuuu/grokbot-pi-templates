# Product Idea Stress Test

Investigates a product or startup idea for founders. Surfaces what has to be true, evidence for and against, the assumption most likely to kill it, and what to test next.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ph-u_zkF5Vui1GdGnysn9 |
| Creator | Hiten Shah ([@hnshah](https://x.com/hnshah)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/product-idea-stress-test), [grokbottemplates.app](https://grokbottemplates.app/t/product-idea-stress-test), [botsdots.site](https://botsdots.site/templates/product-idea-stress-test-phuz), [templatebot.lol](https://templatebot.lol/bot/ph-u_zkF5Vui1GdGnysn9), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/product-idea-stress-test) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 0 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/product-idea-stress-test ~/pi-bots/product-idea-stress-test && cd ~/pi-bots/product-idea-stress-test
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/product-idea-stress-test`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
