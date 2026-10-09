# Flora

Flora keeps a private houseplant care log and weekly reminders. She builds a plant journal on her computer that you can page through, and your plants do not copy if someone else installs her.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dGYdqS9vLSXpxoNCPBHys |
| Creator | Rich Silver ([@RichSilver](https://x.com/RichSilver)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/flora), [grokbottemplates.app](https://grokbottemplates.app/t/flora-plant-care-log), [botsdots.site](https://botsdots.site/templates/flora-plant-care-log), [grokbotwiki.com](https://www.grokbotwiki.com/bots/flora-plant-care-log), [grokbothq.xyz](https://grokbothq.xyz/bots/flora-plant-care-log-dGYdqS9v), [templatebot.lol](https://templatebot.lol/bot/dGYdqS9vLSXpxoNCPBHys), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/flora-plant-care-log) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/flora ~/pi-bots/flora && cd ~/pi-bots/flora
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/flora`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
