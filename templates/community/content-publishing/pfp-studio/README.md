# PFP Studio

Send a photo and name any style, like a cartoon, a movie, or a time period. Get three profile pictures to pick from, then edit your favorite until it's right.

| | |
| --- | --- |
| Original template | https://x.ai/bot/EQbigdwH3pEmkYcsbgidx |
| Creator | Coffee and Grit ([@CoffeeNGrit](https://x.com/CoffeeNGrit)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/pfp-studio), [grokbothq.xyz](https://grokbothq.xyz/bots/pfp-studio), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/CoffeeNGrit/status/2104045388210508129) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/pfp-studio ~/pi-bots/pfp-studio && cd ~/pi-bots/pfp-studio
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/pfp-studio`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
