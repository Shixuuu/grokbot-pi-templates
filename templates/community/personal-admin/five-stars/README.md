# Five Stars

Keeps a small local business's Google, Facebook, Yelp, and TripAdvisor reviews answered. It drafts a reply to each new review in the owner's voice and flags urgent issues and complaint patterns, but never posts anything itself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8SapNFXJ2M6t_3zy0y79C |
| Creator | Austin Meyers ([@Austin](https://x.com/Austin)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/five-stars), [grokbotwiki.com](https://www.grokbotwiki.com/bots/five-stars), [grokbothq.xyz](https://grokbothq.xyz/bots/five-stars), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/five-stars) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/five-stars ~/pi-bots/five-stars && cd ~/pi-bots/five-stars
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/five-stars`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nightly-review-check`: cron `59 20 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
