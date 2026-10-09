# Grok Apron

Leverages your grocery store’s weekly ad to build a cost-effective meal plan for your family. Automatically builds the checkout cart on your grocery store website for pickup or delivery. Family size, meal frequency, and level of culinary variety are all adjustable through the meal planner web interface.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bjQaTbH4Oe2G0lNxb2HBF |
| Creator | Gavin McMahon ([@Handicapper_Gen](https://x.com/Handicapper_Gen)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-apron), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-apron), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-apron), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-apron), [x-research](https://x.com/Handicapper_Gen/status/2105083535287525829) |
| Fidelity | **full** (full recipe, template version 14) |
| Contents | 5 skills, 1 routines, 24 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grok-apron ~/pi-bots/grok-apron && cd ~/pi-bots/grok-apron
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grok-apron`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (24) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/meal-plan-site-feedback`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
