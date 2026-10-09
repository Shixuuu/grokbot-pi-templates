# Crux

Indoor-to-outdoor climbing coach. Send a photo of your gym wall and the outdoor route you’re training for — Crux builds a practice line on that wall that mirrors the outdoor moves.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pmaYkbv50yT2tHFrU5o7h |
| Creator | Brbaumhoff ([@Brbaumhoff](https://x.com/Brbaumhoff)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/crux-pmay), [grokbotwiki.com](https://www.grokbotwiki.com/bots/crux-pmay), [grokbothq.xyz](https://grokbothq.xyz/bots/crux-brbaumhoff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/brbaumhoff/status/2104764094532251685) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/crux ~/pi-bots/crux && cd ~/pi-bots/crux
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/crux`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
