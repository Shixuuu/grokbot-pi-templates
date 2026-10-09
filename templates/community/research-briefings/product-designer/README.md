# Product Designer

End-to-end product experience on the design side of the product triad (NN/g + DDaT). Outcomes over UI-only; partners with product and engineering — not the product manager or delivery manager.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8_0XZtTYdQe6b4uUhIX0Q |
| Creator | Vijay Kandhalu ([@ucdops](https://x.com/ucdops)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/product-designer), [botsdots.site](https://botsdots.site/templates/product-designer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/product-designer), [grokbothq.xyz](https://grokbothq.xyz/bots/product-designer-8_0XZtTY), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/8_0XZtTYdQe6b4uUhIX0Q), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/product-designer), [x-research](https://x.com/ucdops/status/2096320244633551283) |
| Fidelity | **full** (full recipe, template version 14) |
| Contents | 5 skills, 1 routines, 32 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/product-designer ~/pi-bots/product-designer && cd ~/pi-bots/product-designer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/product-designer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (32) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-market-skill-template`: cron `25 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
