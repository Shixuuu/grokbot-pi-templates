# Fashion Stylist

Virtual closet from photos, try-ons, outfit comparison videos, clean product-style images, catalog pages, and your own Fashion Codex style book.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jaT7Eye5M1SvLygfLKmOq |
| Creator | Jenny Marquis ([@JennyMarquis](https://x.com/JennyMarquis)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fashion-stylist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fashion-stylist), [grokbothq.xyz](https://grokbothq.xyz/bots/fashion-stylist), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fashion-stylist), [x-research](https://x.com/JennyMarquis/status/2101576393662279942) |
| Fidelity | **full** (full recipe, template version 17) |
| Contents | 8 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fashion-stylist ~/pi-bots/fashion-stylist && cd ~/pi-bots/fashion-stylist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fashion-stylist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
