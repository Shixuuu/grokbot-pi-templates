# Review This

Reviews the exact product you name. Weighs lab tests, retailer ratings, and owner forums against price and fit in your home market, then says buy, skip, or wait, and how thin the evidence is.

| | |
| --- | --- |
| Original template | https://x.ai/bot/g4hvAEhebCPzqwsdPBGu4 |
| Creator | dogenorway dogenorway ([@DogecoinNorway](https://x.com/DogecoinNorway)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/review-this), [grokbotwiki.com](https://www.grokbotwiki.com/bots/review-this), [grokbothq.xyz](https://grokbothq.xyz/bots/review-this), [templatebot.lol](https://templatebot.lol/bot/g4hvAEhebCPzqwsdPBGu4), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/review-this), [x-research](https://botsdots.site/templates/review-this) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/review-this ~/pi-bots/review-this && cd ~/pi-bots/review-this
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/review-this`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
