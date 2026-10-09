# Basket Allergen

Paste a grocery basket and household allergen profile. Pulls Open Food Facts attributes, then Scores each line: clear, caution_traces, conflict, or unknown_data. Public data only. Never invents hits. Draft score cards only. Not medical advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ee13wSGPrFYqdZAJnGfI4 |
| Creator | Drew ([@SacredFolio](https://x.com/SacredFolio)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/basket-allergen), [grokbotwiki.com](https://www.grokbotwiki.com/bots/basket-allergen), [grokbothq.xyz](https://grokbothq.xyz/bots/basket-allergen), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/basket-allergen), [x-research](https://x.com/SacredFolio/status/2101243140334035431) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/basket-allergen-ee13ws ~/pi-bots/basket-allergen-ee13ws && cd ~/pi-bots/basket-allergen-ee13ws
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/basket-allergen-ee13ws`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
