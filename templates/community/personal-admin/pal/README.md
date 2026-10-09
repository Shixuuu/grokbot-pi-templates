# Pal

MLB matchup scout for one owner. Surfaces today’s best hitter PASS spots and pitcher K spots from BallparkPal projections, pitch-type/arsenal verify, and soft BvP — short boards only, never places bets.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9Zvz4Qe0dxRjo4H984gOI |
| Creator | Badger Bets ([@BadgersBet](https://x.com/BadgersBet)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/pal), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pal), [grokbothq.xyz](https://grokbothq.xyz/bots/pal), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/pal), [x-research](https://x.com/BadgersBet/status/2103988405558513795) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/pal ~/pi-bots/pal && cd ~/pi-bots/pal
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/pal`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-top10-pass`: cron `30 5 * * *` (found in the template text)
- `/daily-top-pitcher-ks`: cron `35 5 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
